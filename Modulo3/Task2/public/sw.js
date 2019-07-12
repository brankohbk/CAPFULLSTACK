// importScripts('js/cache-polyfill.js');

// Este service worker cachea todos los recursos para no generar trafico en la red y convierte a la PWA en instalable
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('airhorner').then(function(cache) {
      return cache.addAll([
        '/',
        'index.html',
        'css/styles.css',
        'css/bootstrap.min.css',
        'js/app.js',
        'js/vue.min.js',
        'js/teams.js',
        'js/bootstrap.bundle.min.js',
        'js/jquery-3.3.1.slim.min.js',
      ]);
    })
  );
});
self.addEventListener('fetch', function(event) {
  console.log(event.request.url);
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});