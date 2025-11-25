import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import ConnectDB from "./config/ConnectDB.js";
import userRoutes from "./routes/UserRoutes.js";

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT_NUMBER || 5000;
ConnectDB();

app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  return res.send("This is first API");
});

app.listen(PORT, () => {
  console.log(`Server start On : ${PORT}`);
});
