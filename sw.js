;
const CACHE_NAME = 'AlexMetaV.0';
urlsToCache = [
    './',
    './client.png',
    './gasto.png',
    './icon.png',
    './icon-192x192.png',
    './icon-256x256.png',
    './icon-384x384.png',
    './icon-512x512.png',
    './product.png',
    './report.png',
    './venta.png',
    './product.png',
    './report.png'
]

// Almacenar en cachpe los archivos estáticos
self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache)
                    .then(() => self.skipWaiting())
            })
            .catch(err => console.log('Falló el registro de caché', err))
    )
});

// Una vez que se instala el SW, se activa y busca 
// los recursos para hacer que funcione sin conexción
self.addEventListener('activate', e => {
    const cacheWhiteList = [ CACHE_NAME ]
    e.waitUntil(
        caches.keys()
            .then(cachesNames => {
                cachesNames.map(cacheName => {
                    if (cacheWhiteList.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName)
                    }
                })
            })
            .then(() => self.clients.claim())
    )
});

// Cuando el navefador recupera una URL
self.addEventListener('fetch', e => {
    // REsponder ya sea con el objeto en caché o con el URL real
    caches.match(e.request)
        .then(res => {
            if (res) {
                return res
            }
            // Recuperar la pertición de la URL
            return fetch(e.request)
        })
});

// navigator.serviceWorker.ready.then(registration => {
//     if (registration.sync) {
//         // Background Sync is supported.
//     } else {
//         // Background Sync isn't supported.
//     }
// });

// navigator.serviceWorker.ready.then(registration => {
//     if (registration.periodicSync) {
//         // Periodic Background Sync is supported.
//     } else {
//         // Periodic Background Sync isn't supported.
//     }
// });

