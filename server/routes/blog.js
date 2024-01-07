import express from "express";
import cors from "cors";
import AuthController from "../controllers/authController.js";
const router = express.Router();
router.post("/user/register", AuthController.userRegistration);
router.post("/user/login", AuthController.userLogin);

export default router;
