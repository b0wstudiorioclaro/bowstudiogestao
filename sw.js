const CACHE_NAME = 'bow-studio-pwa-v1';

self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  // Necessário para o Android validar o PWA como aplicativo nativo (WebAPK)
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
