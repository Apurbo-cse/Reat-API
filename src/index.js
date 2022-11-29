const express = require("express");
const app = express();
const PORT = 5000;
const tests = require("./tests.json");

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/test", (req, res) => {
  res.status(200).json(tests);
});

app.get("/random", (req, res) => {
  let index = Math.floor(Math.random() * tests.length);
  let test = tests[index];
  res.status(200).json(test);
});

app.listen(PORT, () => console.log(`Running server on port ${PORT}`));
