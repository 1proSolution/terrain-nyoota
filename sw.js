/* Nyoota Terrain · service worker · V131 · 3719ab2ef7f9
   Hors réseau, l'application s'ouvre depuis ce cache. Il ne contient QUE le code (aucune donnée : les données vivent
   dans la mémoire du téléphone, et la révocation efface tout, ce cache compris). Les appels à la base ne passent jamais par ici. */
const CACHE = 'nyoota-terrain-V131-3719ab2ef7f9';
const FICHIERS = ["./","index.html","manifest.webmanifest","icone-192.png","icone-512.png","icone-masque-512.png","icone-180.png"];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FICHIERS)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(k => Promise.all(k.filter(x => x !== CACHE).map(x => caches.delete(x)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const r = e.request, u = new URL(r.url);
  if (r.method !== 'GET' || u.origin !== self.location.origin) return;          /* la base, les cartes : jamais en cache */
  if (r.mode === 'navigate') {                                                   /* la page : le réseau d'abord, le cache sinon */
    e.respondWith(fetch(r).then(rep => { if (rep && rep.ok) { const c = rep.clone(); caches.open(CACHE).then(x => x.put('./', c)); } return rep; })
      .catch(() => caches.match('./', { ignoreSearch: true }).then(m => m || caches.match('index.html', { ignoreSearch: true }))));
    return;
  }
  e.respondWith(caches.match(r, { ignoreSearch: true }).then(m => m || fetch(r)));
});
