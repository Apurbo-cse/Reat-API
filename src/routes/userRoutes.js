const express = require("express");
const userRouter = express.Router();

userRouter.post("/signup", (req, res) => {
  res.send("Signup successfully");
});

userRouter.post("/signin", (req, res) => {
  res.send("Signin successful");
});

module.exports = userRouter;
