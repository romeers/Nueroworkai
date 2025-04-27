// Service Worker para NeuroWorkAI
// Versión: 1.0.0

const CACHE_NAME = "neuroworkai-cache-v1"
const OFFLINE_URL = "/offline.html"

// Recursos a cachear inmediatamente durante la instalación
const PRECACHE_ASSETS = [
  "/",
  "/offline.html",
  "/logo.png",
  "/neuroworkai-logo.png",
  "/neural-network-head.png",
  "/abstract-brain-network.png",
  "/favicon.ico",
  "/manifest.webmanifest",
]

// Instalar el service worker
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        // Cachear recursos críticos
        return cache.addAll(PRECACHE_ASSETS)
      })
      .then(() => {
        // Activar inmediatamente sin esperar a que se cierren las pestañas
        return self.skipWaiting()
      }),
  )
})

// Activar el service worker
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((cacheName) => {
              // Eliminar caches antiguos
              return cacheName.startsWith("neuroworkai-cache-") && cacheName !== CACHE_NAME
            })
            .map((cacheName) => {
              return caches.delete(cacheName)
            }),
        )
      })
      .then(() => {
        // Tomar el control de todas las pestañas abiertas
        return self.clients.claim()
      }),
  )
})

// Estrategia de caché: Network first, falling back to cache
self.addEventListener("fetch", (event) => {
  // Solo manejar solicitudes GET
  if (event.request.method !== "GET") return

  // Ignorar solicitudes a la API
  if (event.request.url.includes("/api/")) return

  // Estrategia para imágenes: Cache first, network fallback
  if (isImageRequest(event.request)) {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        if (cachedResponse) {
          // Devolver desde caché inmediatamente
          // Y actualizar la caché en segundo plano
          const fetchPromise = fetch(event.request)
            .then((networkResponse) => {
              const responseToCache = networkResponse.clone()
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(event.request, responseToCache)
              })
              return networkResponse
            })
            .catch(() => {
              // Si la red falla, ya hemos devuelto la respuesta en caché
            })

          return cachedResponse
        }

        // Si no está en caché, intentar desde la red
        return fetch(event.request)
          .then((response) => {
            // Clonar la respuesta para poder cachearla
            const responseToCache = response.clone()

            // Cachear la respuesta para futuras solicitudes
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseToCache)
            })

            return response
          })
          .catch(() => {
            // Si la red falla y no hay caché, mostrar una imagen de fallback
            return caches.match("/placeholder.svg")
          })
      }),
    )
    return
  }

  // Estrategia para HTML: Network first, cache fallback
  if (isHTMLRequest(event.request)) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          // Clonar la respuesta para poder cachearla
          const responseToCache = response.clone()

          // Cachear la respuesta para futuras solicitudes
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache)
          })

          return response
        })
        .catch(() => {
          // Si la red falla, intentar desde caché
          return caches.match(event.request).then((cachedResponse) => {
            // Si está en caché, devolverla
            if (cachedResponse) {
              return cachedResponse
            }

            // Si no está en caché, mostrar la página offline
            return caches.match(OFFLINE_URL)
          })
        }),
    )
    return
  }

  // Estrategia para otros recursos: Stale-while-revalidate
  event.respondWith(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.match(event.request).then((cachedResponse) => {
        const fetchPromise = fetch(event.request)
          .then((networkResponse) => {
            cache.put(event.request, networkResponse.clone())
            return networkResponse
          })
          .catch(() => {
            // Si la red falla y tenemos una respuesta en caché, la usamos
            if (cachedResponse) {
              return cachedResponse
            }

            // Si no hay caché, depende del tipo de recurso
            if (isJSRequest(event.request) || isCSSRequest(event.request)) {
              // Para JS y CSS, intentar usar una versión anterior si existe
              return caches.match(getBaseUrl(event.request.url))
            }

            // Para otros recursos, simplemente fallar
            throw new Error("Network error and no cache available")
          })

        // Devolver la respuesta en caché mientras se actualiza en segundo plano
        return cachedResponse || fetchPromise
      })
    }),
  )
})

// Funciones auxiliares para determinar el tipo de solicitud
function isImageRequest(request) {
  return request.destination === "image" || /\.(jpe?g|png|gif|svg|webp|avif)$/i.test(request.url)
}

function isHTMLRequest(request) {
  return (
    request.destination === "document" ||
    (request.mode === "navigate" && request.headers.get("accept").includes("text/html"))
  )
}

function isJSRequest(request) {
  return request.destination === "script" || /\.js$/i.test(request.url)
}

function isCSSRequest(request) {
  return request.destination === "style" || /\.css$/i.test(request.url)
}

function getBaseUrl(url) {
  // Eliminar parámetros de consulta y hash
  return url.split("?")[0].split("#")[0]
}

// Crear una página offline simple
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll([OFFLINE_URL])
    }),
  )
})
