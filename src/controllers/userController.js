const userModel = require("../models/user");
const bcrypt = require("bcrypt");

const signup = async (req, res) => {
  // Existing user Check
  // Hashed Password
  // User Creation
  //Token Generate

  const { username, email, password } = req.body;

  try {
    const existingUser = await userModel.findOne({ email: email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hasPassword = await bcrypt.hash(password, 10);
  } catch (err) {}
};

const signin = (req, res) => {};

module.exports = { signup, signin };
