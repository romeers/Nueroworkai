/**
 * Utility functions for JavaScript performance optimization
 */

// Throttle function to limit execution frequency
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number,
): (...args: Parameters<T>) => ReturnType<T> | undefined {
  let lastFunc: ReturnType<NodeJS.Timeout>
  let lastRan: number

  return (...args: Parameters<T>): ReturnType<T> | undefined => {
    if (!lastRan) {
      const result = func(...args)
      lastRan = Date.now()
      return result
    } else {
      clearTimeout(lastFunc)
      lastFunc = setTimeout(
        () => {
          if (Date.now() - lastRan >= limit) {
            const result = func(...args)
            lastRan = Date.now()
            return result
          }
        },
        limit - (Date.now() - lastRan),
      )
      return undefined
    }
  }
}

// Debounce function to delay execution until after events stop
export function debounce<T extends (...args: any[]) => any>(func: T, wait: number): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null

  return (...args: Parameters<T>): void => {
    const later = () => {
      timeout = null
      func(...args)
    }

    if (timeout !== null) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(later, wait)
  }
}

// Memoize function to cache results
export function memoize<T extends (...args: any[]) => any>(func: T): (...args: Parameters<T>) => ReturnType<T> {
  const cache = new Map<string, ReturnType<T>>()

  return (...args: Parameters<T>): ReturnType<T> => {
    const key = JSON.stringify(args)
    if (cache.has(key)) {
      return cache.get(key)!
    }

    const result = func(...args)
    cache.set(key, result)
    return result
  }
}

// Batch DOM operations for better performance
export function batchDOMOperations(operations: (() => void)[]): void {
  // Use requestAnimationFrame for smoother animations
  requestAnimationFrame(() => {
    // Create a document fragment to batch DOM operations
    const fragment = document.createDocumentFragment()

    // Execute all operations
    operations.forEach((operation) => operation())

    // Commit changes to DOM
    document.body.appendChild(fragment)
  })
}

// Optimize event listeners with passive option
export function addPassiveEventListener(
  element: HTMLElement | Window | Document,
  eventName: string,
  handler: EventListenerOrEventListenerObject,
  options: boolean | AddEventListenerOptions = false,
): void {
  // Use passive listeners for touch and wheel events
  const passiveEvents = ["touchstart", "touchmove", "wheel", "mousewheel"]

  if (typeof options === "object") {
    options = { ...options, passive: passiveEvents.includes(eventName) }
  } else if (passiveEvents.includes(eventName)) {
    options = { passive: true }
  }

  element.addEventListener(eventName, handler, options)
}

// Optimize resource loading
export function loadResourcesOnDemand(resources: { type: "script" | "style"; src: string }[]): void {
  // Use Intersection Observer to load resources when they come into view
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement
          const resourceIndex = Number.parseInt(target.dataset.resourceIndex || "0", 10)
          const resource = resources[resourceIndex]

          if (resource) {
            if (resource.type === "script") {
              const script = document.createElement("script")
              script.src = resource.src
              script.async = true
              document.body.appendChild(script)
            } else if (resource.type === "style") {
              const link = document.createElement("link")
              link.rel = "stylesheet"
              link.href = resource.src
              document.head.appendChild(link)
            }
          }

          observer.unobserve(target)
        }
      })
    },
    { rootMargin: "200px" },
  )

  // Create trigger elements for each resource
  resources.forEach((resource, index) => {
    const trigger = document.createElement("div")
    trigger.style.height = "1px"
    trigger.style.width = "1px"
    trigger.style.position = "absolute"
    trigger.style.opacity = "0"
    trigger.style.pointerEvents = "none"
    trigger.dataset.resourceIndex = index.toString()
    document.body.appendChild(trigger)
    observer.observe(trigger)
  })
}
