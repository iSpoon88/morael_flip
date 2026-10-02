const CACHE = "morael-coin-v1";
const FILES = [
  "./",
  "./index.html",
  "./manifest.json",
  "./assets/morael.png",
  "./assets/alaarael.png",
  "./assets/icon.png"
];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(r => r || fetch(event.request))
  );
});