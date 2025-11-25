import express from "express";
import UserModel from "../models/UserSchema.js";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const router = express.Router();

router.post("/register", async (req, res) => {
  const { name, password, email } = req.body;

  if (!name || !password || !email) return res.json("Enter the details");
  try {
    const User = await UserModel.findOne({ email });

    if (User) {
      return res.status(400).json({ message: "User already registered!" });
    }

    const genPassword = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, genPassword);

    const NewUser = new UserModel({ name, password: hashPassword, email });

    await NewUser.save();

    res.status(200).json({ message: "Registration successfully" });
  } catch (error) {
    console.error("Error : ", error);
    res.status(500).send("Server error!");
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email });

    // If user not found
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).send({ message: "Password does not match" });
    }

    return res.status(200).send({
      message: "Login successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).send({ message: "Internal server error" });
  }
});

export default router;
