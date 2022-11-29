const userModel = require("../models/user");
const bcrypt = require("bcrypt");

const signup = async (req, res) => {
  //Token Generate

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
    
  } catch (err) {}
};

const signin = (req, res) => {};

module.exports = { signup, signin };
