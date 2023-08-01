const express = require("express");
const app = express();
let path = require("path");

app.listen(3000);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/home.html"));
});

app.get("/it-services", (req, res) => {
  res.sendFile(path.join(__dirname + "/itservices.html"));
});

app.get("/about-us", (req, res) => {
  res.sendFile(path.join(__dirname + "/aboutus.html"));
});
