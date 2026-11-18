// Two Tales PWA: online-only business transactions, offline information page.
const CACHE = 'two-tales-pwa-assets-v1';
const ASSETS = ['./offline.html','./manifest.webmanifest','./icons/icon-192.png','./icons/icon-512.png'];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k.startsWith('two-tales-pwa-') && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  if (req.mode === 'navigate') {
    event.respondWith(fetch(req).catch(() => caches.match('./offline.html')));
    return;
  }
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return; // Supabase and CDN remain network-only
  if (ASSETS.some(path => url.pathname.endsWith(path.slice(1)))) {
    event.respondWith(caches.match(req).then(hit => hit || fetch(req)));
  }
});
