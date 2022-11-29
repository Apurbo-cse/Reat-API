const userModel = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "NOTEAPI";

const signup = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Existing user Check
    const existingUser = await userModel.findOne({ email: email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hashed Password
    const hasPassword = await bcrypt.hash(password, 10);

    // User Creation
    const result = await userModel.create({
      email: email,
      password: hasPassword,
      username: username,
    });

    //Token Generate
    const token = jwt.sign(
      {
        email: result.email,
        id: result.id,
      },
      SECRET_KEY
    );
    res.status(201).json({ user: result, token: token });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Something is wrong" });
  }
};

const signin = (req, res) => {};

module.exports = { signup, signin };
