/*
 * Lefsihe Academy Service Worker
 * Strategy: Cache First, Fallback to Network
 * Version: 2.2
 */

const CACHE_NAME = 'lefsihe-v2.2';
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './data.js',
    './manifest.json',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/dompurify/3.0.6/purify.min.js',
    'https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&family=Outfit:wght@400;500;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap'
];

// 1. Install Event: Cache core assets
self.addEventListener('install', (event) => {
    console.log('[Service Worker] Installing...');
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('[Service Worker] Caching App Shell');
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
    self.skipWaiting();
});

// 2. Activate Event: Clean up old caches
self.addEventListener('activate', (event) => {
    console.log('[Service Worker] Activating...');
    event.waitUntil(
        caches.keys().then((keyList) => {
            return Promise.all(keyList.map((key) => {
                if (key !== CACHE_NAME) {
                    console.log('[Service Worker] Removing old cache', key);
                    return caches.delete(key);
                }
            }));
        })
    );
    return self.clients.claim();
});

// 3. Fetch Event: Serve from Cache, fallback to Network
self.addEventListener('fetch', (event) => {
    // Only handle GET requests
    if (event.request.method !== 'GET') return;

    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            // Return cached response if found
            if (cachedResponse) {
                return cachedResponse;
            }

            // Otherwise, fetch from network
            return fetch(event.request).then((networkResponse) => {
                // Verify response is valid
                if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
                    return networkResponse;
                }

                // Cache the new resource (optional dynamic caching)
                /* * Uncomment below if you want to cache everything visited dynamically.
                 * For this static app, keeping it strictly versioned is safer.
                 */
                // const responseToCache = networkResponse.clone();
                // caches.open(CACHE_NAME).then((cache) => {
                //     cache.put(event.request, responseToCache);
                // });

                return networkResponse;
            }).catch(() => {
                // Offline fallback (if needed, currently HTML handles offline UI)
                console.log('[Service Worker] Offline and resource not cached.');
            });
        })
    );
});