const CACHE_NAME = 'cache-1'
const urlsToCache = ['index.html', 'offline.html']

const self = this

//Install
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Opened')
      return cache.addAll(urlsToCache)
    }),
  )
})

//Requests
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then(() => {
      return fetch(e.request).catch(() => caches.match('offline.html'))
    }),
  )
})

//Activate
self.addEventListener('activate', (e) => {
  const cacheWhiteList = []
  cacheWhiteList.push(CACHE_NAME)
  e.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhiteList.includes(cacheName)) {
            return caches.delete(cacheName)
          }
        }),
      ),
    ),
  )
})
