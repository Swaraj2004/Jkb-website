const express = require("express");
const app = express();
let path = require("path");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/home.html"));
});

app.get("/it-services", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/itservices.html"));
});

app.get("/about-us", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/aboutus.html"));
});

app.listen(3000);
