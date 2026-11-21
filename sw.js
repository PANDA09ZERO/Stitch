// ===================== SERVICE WORKER =====================
// Permite instalar Stitch Game en el móvil y jugar sin conexión.
// Estrategia: se guarda todo al instalar; después se sirve desde la caché al instante
// y se actualiza en segundo plano (la siguiente vez que se abra ya sale la versión nueva).
// Al cambiar archivos del juego, sube VERSION para limpiar la caché antigua.
const VERSION = 'smc-v4';
const ARCHIVOS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png',
  './icons/apple-touch-icon.png',
  './personajes/buenos/stitch/elvis.png',
  './personajes/buenos/stitch/falda_ulaula.png',
  './personajes/buenos/stitch/surfer.png',
  './personajes/buenos/stitch/genio.png',
  './personajes/buenos/stitch/en_serio.png',
  './personajes/buenos/stitch/espanto.png',
  './personajes/buenos/stitch/jajaja.png',
  './personajes/buenos/stitch/molesto.png',
  './personajes/buenos/stitch/uir.png',
  './personajes/buenos/stitch/ups.png',
  './personajes/buenos/stitch/summer_lilostitch_elvis_89aee099.jpeg'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(ARCHIVOS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  // Solo el propio juego y la fuente de Google Fonts
  const propio = url.origin === self.location.origin;
  const fuente = url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com';
  if (!propio && !fuente) return;
  e.respondWith(
    caches.open(VERSION).then(async cache => {
      const guardado = await cache.match(req, { ignoreSearch: propio });
      const red = fetch(req).then(res => {
        if (res && (res.ok || res.type === 'opaque')) cache.put(req, res.clone());
        return res;
      }).catch(() => guardado);
      return guardado || red;
    })
  );
});
