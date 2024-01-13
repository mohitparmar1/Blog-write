import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectTomongoDB = async () => {
  const connect = await mongoose.connect(process.env.MONGODB_URL);
  if (connect) {
    console.log("MongoDB connected");
  }
};

export default connectTomongoDB;
