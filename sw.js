const CACHE = 'asoe-v5';
const ASSETS = ['/', './index.html', './characters.js', './achievements.js', './collector_cards.js', './manifest.json'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  let url;
  try { url = new URL(e.request.url); } catch (_) { return; }
  // NEVER intercept cross-origin requests (Firebase Auth, Google sign-in, Firestore) or the
  // Firebase auth handler paths — caching/serving these breaks the OAuth flow ("missing initial
  // state") on mobile and installed PWAs. Let them go straight to the network, untouched.
  if (url.origin !== self.location.origin) return;
  if (url.pathname.startsWith('/__/')) return;
  e.respondWith(fetch(e.request).then(resp => {
    if (resp.ok) { const c = resp.clone(); caches.open(CACHE).then(cache => cache.put(e.request, c)); }
    return resp;
  }).catch(() => caches.match(e.request)));
});
