import jwt from "jsonwebtoken";
import authModel from "../models/authModel.js";

const checkIsAuthenticated = async (req, res, next) => {
  let token;
  const { authorization } = req.headers;
  if (authorization) {
    try {
      token = authorization;

      const { userId } = jwt.verify(token, "12345");
      req.user = await authModel.findById(userId).select("--password");
      next();
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  } else {
    return res.status(401).json({
      message: "Not authorized, token failed",
    });
  }
};

export default checkIsAuthenticated;
