console.log("Service worker loaded");

self.addEventListener("push", (e) => {
  const data = e.data.json();
  console.log("The push has been received");

  self.registration.showNotification(data.title, {
    body: "Notified by Kunta",
    icon: "/icons/notification-icon.png",
  });
});
