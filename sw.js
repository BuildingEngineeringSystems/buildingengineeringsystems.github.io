// Service worker ขั้นต่ำ เพื่อให้ Android แสดงปุ่ม "ติดตั้งแอป" (ไม่เก็บแคชข้อมูลระบบ)
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () { /* ส่งผ่านตามปกติ */ });
