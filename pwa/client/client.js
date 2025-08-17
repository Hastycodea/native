const publicVapidKey =
  "BIdGFTsrJrFp4u5V1O5t-WoRpkIWr8DmA0epaWGbqldg2rcoXXthOFHlBKUY4-tQWBFA30kVkymBt70wKQavKII";

if ("serviceWorker" in navigator) {
  send().catch((err) => console.error(err));
}

// Register sw, register push, send push
async function send() {
  // Register service worker
  console.log("Registering service worker");

  const register = await navigator.serviceWorker.register("/worker.js", {
    scope: "/",
  });

  console.log("Service Worker registered...");

  // Register push
  console.log("Registering the push...");

  const subscription = await register.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: publicVapidKey,
  });

  console.log("Push registered...");

  // Send Push notification
  console.log("Sending push notification...");

  await fetch("/subscribe", {
    method: "Post",
    body: JSON.stringify(subscription),
    headers: {
      "content-type": "application/json",
    },
  });

  console.log(`Push sent...`);
}
