
const cacheName = "restaurants-review-cache";

const urlsToCache = [
    '/',
    'css/styles.css',
    'js/main.js',
    'js/restaurant_info.js',
    'js/dbhelper.js',
    'img/1.jpg',
    'img/2.jpg',
    'img/3.jpg',
    'img/4.jpg',
    'img/5.jpg',
    'img/6.jpg',
    'img/7.jpg',
    'img/8.jpg',
    'img/9.jpg',
    'img/10.jpg',
    'https://unpkg.com/leaflet@1.3.1/dist/leaflet.css'
];

//Service worker install
self.addEventListener("install", function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            // Save all URLs in cache
            return cache.addAll(urlsToCache);
        })
    );
});

//Service worker fetch event
self.addEventListener("fetch", function (event) {
    event.respondWith(
        caches.match(event.request).then(function (response) {
            // Cache hit - return response
            if (response) return response;
            //Cache miss - fetch request
            return fetch(event.request);
        })
    );
});
