const staticAlexMeta = "AlexMeta-site-v1";
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "/images/ventas.jpg",
  "/images/gastos.jpg",
  "/images/reportes.jpg",
  "/images/clientes.jpg",
  "/images/aprende.jpg",
  "/images/apoyo.jpg",
  "/images/lista.jpg",
  "/images/motiva.jpg",
  "/images/acerca.jpg"
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticAlexMeta).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});
