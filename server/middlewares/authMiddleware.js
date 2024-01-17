import jwt from "jsonwebtoken";
import authModel from "../models/authModel.js";

const checkIsAuthenticated = async (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    try {
      const { userId } = jwt.verify(token, "12345");
      req.user = await authModel.findById(userId);

      if (!req.user) {
        return res.status(401).json({
          message: "User not found",
        });
      }

      // If all checks pass, proceed to the next middleware or route handler
      next();
    } catch (error) {
      // Handle specific error cases
      if (error.name == "JsonWebTokenError") {
        return res.status(401).json({
          message: "Invalid token",
        });
      } else if (error.name == "TokenExpiredError") {
        return res.status(401).json({
          message: "Token expired",
        });
      } else {
        // Handle other errors
        console.error("Error in checkIsAuthenticated middleware:", error);
        return res.status(500).json({
          message: "Internal server error",
        });
      }
    }
  } else {
    return res.status(401).json({
      message: "Not authorized, token missing",
    });
  }
};

export default checkIsAuthenticated;
