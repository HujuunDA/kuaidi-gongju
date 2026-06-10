// sw.js
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  // 这里可以写离线缓存逻辑，最简单就是直接放行
  event.respondWith(fetch(event.request));
});