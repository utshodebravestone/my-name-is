import express from "express";
import bcrypt from "bcryptjs";

import User from "../models/user.js";

const router = express.Router();

router.post("/signup", async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  const user = new User({ username, email, password: hashedPassword });
  try {
    await user.save();
    res.status(201).json({ message: "Signed up successfully" });
  } catch (err) {
    next(err);
  }
});

export default router;
