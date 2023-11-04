import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import userRouter from "./routers/user.js";
import authRouter from "./routers/auth.js";

dotenv.config();

mongoose.connect(process.env.MONGO_URI, {}).then(() => {
  console.log("Connected to MongoDBAtlas");
});

const app = express();

app.use(express.json());

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

app.listen(8080, () => {
  console.log(`Listening on http://localhost:8080`);
});
