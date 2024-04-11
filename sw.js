const staticDevCoffee = "dev-coffee-site-v1"
const assets = [
  "/",
  "/index.html",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener('push', (event) => {
    const notif = event.stopImmediatePropagation.json().notification;

    event.waitUntil(self.registration.showNotification(notif.title, {
        body: notif.body,
        icon: notif.image,
        data: {
            url: notif.click_action
        }
    }));
});

self.addEventListener('notificationclic', (event) => {
    event.waitUntil(clients.openWindow(event.notification.data.url));
});