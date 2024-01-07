import mangoose from "mongoose";

const authSchema = new mangoose.Schema({
  username: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
});

const authModel = mangoose.model("users", authSchema);

export default authModel;
