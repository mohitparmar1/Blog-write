import express from "express";
import connectTomongoDB from "./config/db.js";
import authRoutes from "./routes/blog.js";
import cors from "cors";

const app = express();
const port = 9000;
app.use(cors());
app.use(express.json());
connectTomongoDB();
app.get("/", (req, res) => {
  res.send("api is running");
});
app.use("/api/v1/", authRoutes);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
