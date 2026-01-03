import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
dotenv.config();   // 🔴 MUST be before connectDB
connectDB(); 

console.log("Server file started");

const app = express();

app.get("/", (req, res) => {
  res.send("Dayflow backend running");
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
