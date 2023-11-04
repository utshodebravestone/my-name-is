import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.MONGO_URI, {}).then(() => {
  console.log("Connected to MongoDBAtlas");
});

const app = express();

app.listen(8080, () => {
  console.log(`Listening on http://localhost:8080`);
});
