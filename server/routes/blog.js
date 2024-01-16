import express from "express";
import cors from "cors";
import AuthController from "../controllers/authController.js";
import blogController from "../controllers/blogController.js";
import categoryController from "../controllers/categoryController.js";
import checkIsAuthenticated from "../middlewares/authMiddleware.js";
import multer from "multer";

const router = express.Router();

//multer config

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, `/public/uploads`);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

router.post("/user/register", AuthController.userRegistration);
router.post("/user/login", AuthController.userLogin);

//protected route
router.get("/get/all-blogs", checkIsAuthenticated, blogController.getAllBlogs);
router.post(
  "/add/new-blog",
  upload.single("thumbnail"),
  checkIsAuthenticated,
  blogController.addNewBlog
);
router.get(
  "/get/single-blog/:id",
  checkIsAuthenticated,
  blogController.getSingleBlog
);

router.get(
  "/get/categories",
  checkIsAuthenticated,
  categoryController.getAllCategories
);
router.post(
  "/add/new-category",
  checkIsAuthenticated,
  categoryController.addNewCategory
);

export default router;
