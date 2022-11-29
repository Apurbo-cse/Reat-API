const express = require("express");
const app = express();
const PORT = 5000;

app.get("/hello", (req, res) => {
  res.send("Hello");
});

app.listen(PORT, () => console.log(`Running server on port ${PORT}`));
