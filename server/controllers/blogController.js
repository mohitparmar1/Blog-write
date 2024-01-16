import blogModel from "../models/blogModel.js";
import categoryModel from "../models/categoryModel.js";
import authModel from "../models/authModel.js";

class blogController {
  static getAllBlogs = async (req, res) => {
    try {
      const blog = await blogModel.find({ user: req.user._id });
      if (blog) {
        res.status(200).json({
          message: "All blogs",
          data: blog,
        });
      } else {
        res.status(400).json({
          message: "No blog found",
        });
      }
    } catch (error) {
      res.status(500).json({
        message: error,
      });
    }
  };
  static addNewBlog = async (req, res) => {
    const { title, description, category } = req.body;
    try {
      if (title && description && category) {
        const addBlog = new blogModel({
          title,
          description,
          category,
          thumbnail: req.file.path,
          user: req.user._id,
        });
        const savedBlog = await addBlog.save();
        if (savedBlog) {
          res.status(200).json({
            message: "Blog added successfully",
            data: savedBlog,
          });
        } else {
          res.status(400).json({
            message: "Blog not added",
          });
        }
      } else {
        return res.status(400).json({
          message: "All fields are required",
        });
      }
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  };
  static getSingleBlog = async (req, res) => {
    const { id } = req.params;
    try {
      const blog = await blogModel.findById(id);
      if (blog) {
        res.status(200).json({
          message: "Single blog",
          data: blog,
        });
      } else {
        res.status(400).json({
          message: "No blog found",
        });
      }
    } catch (error) {
      res.status(500).json({
        message: error,
      });
    }
  };
}

export default blogController;
