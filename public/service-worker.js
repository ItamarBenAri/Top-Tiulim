/**
 * Service Worker for Image Caching
 * --------------------------------
 * This service worker is designed to cache image assets to improve load performance and 
 * reduce redundant network requests. It also includes a cache cleanup strategy to remove
 * old cache entries based on a defined maximum cache age.
 */

// Cache configuration
const CACHE_NAME = "image-cache"; // Name of the cache storage
const MAX_CACHE_AGE = 30 * 24 * 60 * 60 * 1000; // Cache retention duration: 30 days in milliseconds

/**
 * Clean Old Cache
 * ----------------
 * Deletes cache entries that are older than the specified MAX_CACHE_AGE. This function
 * ensures that the cache does not grow indefinitely and only retains relatively fresh assets.
 */
async function cleanOldCache() {
    const cache = await caches.open(CACHE_NAME); // Open the designated cache
    const requests = await cache.keys(); // Get all cached requests (keys)
    const now = Date.now(); // Current timestamp in milliseconds

    for (const request of requests) {
        const response = await cache.match(request); // Retrieve each cached response
        if (response) {
            const dateHeader = response.headers.get("date"); // Check for the "date" header in the response
            if (dateHeader) {
                const cacheDate = new Date(dateHeader).getTime(); // Convert header date to timestamp
                if (now - cacheDate > MAX_CACHE_AGE) { // Check if cache entry is older than max age
                    await cache.delete(request); // Remove outdated cache entry
                }
            }
        }
    }
}

/**
 * Fetch Event Listener
 * ---------------------
 * Intercepts network requests to cache and retrieve images. Images are cached on first access,
 * allowing subsequent requests to be served from the cache, reducing network load and latency.
 */
self.addEventListener("fetch", (event) => {
    const url = event.request.url;

    // Only process requests for images (e.g., jpg, jpeg, png, or requests containing "image" in the URL)
    if (url.endsWith(".jpg") || url.endsWith(".JPG") || url.endsWith(".jpeg") || url.endsWith(".png") || url.includes("image")) {
        event.respondWith(
            caches.open(CACHE_NAME).then((cache) => 
                cache.match(event.request).then((cachedResponse) => {
                    if (cachedResponse) {
                        // Serve the cached response if available
                        return cachedResponse;
                    }
                    // Fetch the resource from the network if not cached
                    return fetch(event.request).then((networkResponse) => {
                        cache.put(event.request, networkResponse.clone()); // Store a copy of the fetched response in the cache
                        return networkResponse;
                    });
                })
            )
        );
    }
});

/**
 * Activate Event Listener
 * ------------------------
 * Cleans old cached entries during the "activate" phase, ensuring that outdated images are
 * periodically removed and cache storage is efficiently managed.
 */
self.addEventListener("activate", (event) => {
    event.waitUntil(cleanOldCache()); // Execute cache cleaning when the service worker is activated
});
