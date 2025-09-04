const express = require("express");
const webpush = require("web-push");
const bodyparser = require("body-parser");
const path = require("path");

const app = express();

// Set static path
app.use(express.static(path.join(__dirname, "client")));

app.use(bodyparser.json);

const publicVapidKey =
  "BIdGFTsrJrFp4u5V1O5t-WoRpkIWr8DmA0epaWGbqldg2rcoXXthOFHlBKUY4-tQWBFA30kVkymBt70wKQavKII";
const privateVapidKey = "Vw_bUT3DTxchzcT7-5Y99aWqup9ghthlnJVwdfyC_EU";

webpush.setVapidDetails(
  "mailto: test@test.com",
  publicVapidKey,
  privateVapidKey
);

// create subscribe route
app.post("/subscribe", (req, res) => {
  // Get push subscription object
  const subscription = req.body;

  // Send 201 status - resource created
  res.status(201).json({});

  // Create the payload
  const payload = JSON.stringify({ title: "Push Test" });

  // Pass object into send notification function
  webpush
    .sendNotification(subscription, payload)
    .catch((err) => console.log(err));
});

const port = 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
