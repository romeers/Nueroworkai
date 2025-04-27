// Service Worker for NeuroWorkAI
const CACHE_NAME = "neuroworkai-cache-v1"
const urlsToCache = [
  "/",
  "/index.html",
  "/globals.css",
  "/logo.png",
  "/favicon.ico",
  "/manifest.json",
  "/neural-network-head.png",
  "/abstract-brain-network.png",
]

// Install event - cache critical assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache)
    }),
  )
})

// Activate event - clean up old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((cacheName) => {
            return cacheName !== CACHE_NAME
          })
          .map((cacheName) => {
            return caches.delete(cacheName)
          }),
      )
    }),
  )
})

// Fetch event - serve from cache, then network
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Cache hit - return response
      if (response) {
        return response
      }

      // Clone the request
      const fetchRequest = event.request.clone()

      return fetch(fetchRequest).then((response) => {
        // Check if valid response
        if (!response || response.status !== 200 || response.type !== "basic") {
          return response
        }

        // Clone the response
        const responseToCache = response.clone()

        // Cache the fetched response
        caches.open(CACHE_NAME).then((cache) => {
          // Don't cache API calls or external resources
          if (!event.request.url.includes("/api/") && event.request.url.startsWith(self.location.origin)) {
            cache.put(event.request, responseToCache)
          }
        })

        return response
      })
    }),
  )
})

// Background sync for offline form submissions
self.addEventListener("sync", (event) => {
  if (event.tag === "sync-forms") {
    event.waitUntil(syncForms())
  }
})

// Function to sync stored form data
async function syncForms() {
  try {
    const db = await openDB()
    const forms = await db.getAll("forms")

    for (const form of forms) {
      try {
        const response = await fetch(form.url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form.data),
        })

        if (response.ok) {
          await db.delete("forms", form.id)
        }
      } catch (error) {
        console.error("Failed to sync form:", error)
      }
    }
  } catch (error) {
    console.error("Error syncing forms:", error)
  }
}

// Open IndexedDB
function openDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("neuroworkai-offline", 1)

    request.onupgradeneeded = (event) => {
      const db = event.target.result
      db.createObjectStore("forms", { keyPath: "id", autoIncrement: true })
    }

    request.onsuccess = (event) => {
      resolve(event.target.result)
    }

    request.onerror = (event) => {
      reject(event.target.error)
    }
  })
}
