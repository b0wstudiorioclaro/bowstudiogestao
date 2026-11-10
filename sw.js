const CACHE_NAME = 'bow-studio-pwa-v87';
const APP_FILES = [
  './index.html', './pwa.js', './manifest.json', './icon-five.png',
  './icone-app-192.png', './icone-app-512.png'
];
const APP_URLS = new Set(APP_FILES.map(path => new URL(path, self.registration.scope).href));
const INDEX_URL = new URL('./index.html', self.registration.scope).href;

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    await cache.addAll(APP_FILES);
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names.filter(name => name.startsWith('bow-studio-pwa-') && name !== CACHE_NAME).map(name => caches.delete(name)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;
  url.search = '';
  url.hash = '';
  const key = url.href === self.registration.scope ? INDEX_URL : url.href;
  // Cache only the application shell; leave cloud synchronization unchanged.
  if (!APP_URLS.has(key)) return;
  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    try {
      const response = await fetch(event.request);
      if (response.ok && response.type === 'basic') {
        try { await cache.put(key, response.clone()); } catch (_) { /* Storage may be full. */ }
      }
      return response;
    } catch (_) {
      return await cache.match(key) || new Response('BOW Studio indisponível. Conecte-se à internet e tente novamente.', {
        status: 503, headers: { 'Content-Type': 'text/plain; charset=utf-8' }
      });
    }
  })());
});
