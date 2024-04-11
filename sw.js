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