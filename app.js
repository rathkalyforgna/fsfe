const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello, server!");
});

app.get("/demo", (req, res) => {
  res.set("X-Full-Stack", "4life");
  res.status(418);
  res.send("I am teapot");
});

app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});
