import mongoose from "mongoose";

const connectTomongoDB = async () => {
  const connect = await mongoose.connect(
    "mongodb://127.0.0.1:27017/blog_app_project"
  );
  if (connect) {
    console.log("MongoDB connected");
  }
};

export default connectTomongoDB;
