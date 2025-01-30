const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Signup = require("./Models/signupSchema"); // Ensure correct path
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connection Successful"))
  .catch((err) => console.error("MongoDB connection unsuccessful", err));

const verifyToken = (req, res, next) => {
  console.log("Middleware is triggered");
  let token = req.headers.authorization;
  
  if (!token) {
    return res.status(403).send("Request Denied");
  }

  try {
    const user = jwt.verify(token, process.env.SECRET_KEY);
    req.user = user;
    next();
  } catch (error) {
    console.error(error);
    return res.status(403).send("Invalid Token");
  }
};

app.get('/json', verifyToken, (req, res) => {
  console.log("Inside Json route");
  res.json({ message: "This is a middleware check", user: req.user.username });
});

app.post('/signup', async (req, res) => {
  const { firstname, lastname, username, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 15);
    
    const newCustomer = new Signup({
      firstname,
      lastname,
      username,
      email,
      password: hashedPassword,
    });

    await newCustomer.save();
    res.status(201).json({ response: "Signup successful", signupStatus: true });

  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await Signup.findOne({ email });

    if (!user) {
      return res.status(404).json({ response: "User not found", loginStatus: false });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ response: "Incorrect password", loginStatus: false });
    }

    const payload = { email: user.email, username: user.username };
    const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: "1h" });

    res.status(200).json({ response: "Login successful", loginStatus: true, token });

  } catch (err) {
    res.status(500).json({ error: "Error during login" });
  }
});

app.listen(3005, () => {
  console.log("Server connected on port 3005");
});
