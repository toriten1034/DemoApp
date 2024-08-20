self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('svg-audio-app').then(function(cache) {
        return cache.addAll([
          '/',
          '/main.html',
          '/BodyWash.svg',
          '/DoorClose.svg',
          '/DoorOpen.svg',
          '/Help.svg',
          '/Shower.svg',
          '/BodyWash.mp3',
          '/DoorClose.mp3',
          '/DoorOpen.mp3',
          '/Help.mp3',
          '/Shower.mp3'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });
  