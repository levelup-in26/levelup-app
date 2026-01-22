self.addEventListener('install', event => {
    event.waitUntil(
      caches.open('level-up-cache').then(cache => {
        return cache.addAll([
          '/',
          '/index.html',
          '/event.html',
          '/styles.css',
          '/script.js',
          '/assets/background.jpg',
          '/assets/full-poster.jpg'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request).then(response => {
        return response || fetch(event.request);
      })
    );
  });
  