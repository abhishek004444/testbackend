const { User } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userSchema = require("../validations/userValidations.js");

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({ attributes: { exclude: ["password"] } });
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createUser = async (req, res) => {
  try {
    const validatedData = userSchema.parse(req.body);
    // const { name, email, password } = req.body;

    // Hash password before saving
    // const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create(validatedData);
    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.signIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(404).json({ message: "User not found" });

    // Validate password
    // const isMatch = await bcrypt.compare(password, user.password);
    // if (!isMatch){
    //   return res.status(401).json({ message: "Invalid credentials" });
    // }
    if(password != user.password){
      return res.status(401).json({ message: "Invalid credentials" });
    }
    // Generate JWT token
    const token = jwt.sign(
      { id: user.id, email: user.email },"abhishek", // Use a secure secret key in .env
      { expiresIn: "1h" }
    );

    res.json({ message: "Login successful", token ,user});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
