const express = require("express");
const app = express();
const PORT = 5000;
const userRouter = require("./routes/userRoutes");
const noteRouter = require("./routes/noteRoutes");

const mongoose = require("mongoose");

app.use("/users", userRouter);
app.use("/note", noteRouter);

app.get("/", (req, res) => {
  res.send("Hello");
});

mongoose
  .connect(
    "mongodb+srv://admin:<password>@cluster0.apqbxop.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Running server on port ${PORT}`);
    });
  })

  .catch((err) => {
    console.log(err);
  });
