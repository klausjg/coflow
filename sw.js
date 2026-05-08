/**
 * CoFlow - Minimal Service Worker
 * beforeinstallprompt 트리거용. 실제 캐싱은 하지 않음.
 */
const SW_VERSION = 'hf-launcher-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // 네트워크 그대로 통과 (fetch 핸들러 존재 자체가 installability 조건)
  return;
});
