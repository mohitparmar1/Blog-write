import express from "express";
import cors from "cors";
import AuthController from "../controllers/authController.js";
import blogController from "../controllers/blogController.js";
import categoryController from "../controllers/categoryController.js";
const router = express.Router();
router.post("/user/register", AuthController.userRegistration);
router.post("/user/login", AuthController.userLogin);

//protected route
router.get("/get/all-blogs", blogController.getAllBlogs);
router.post("/add/new-blog", blogController.addNewBlog);
router.get("/get/single-blog/:id", blogController.getSingleBlog);

router.get("/get/categories", categoryController.getAllCategories);
router.post("/add/new-category", categoryController.addNewCategory);

export default router;
