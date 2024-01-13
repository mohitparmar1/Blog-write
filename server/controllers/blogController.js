import blogModel from "../models/blogModel.js";
import categoryModel from "../models/categoryModel.js";
import authModel from "../models/authModel.js";

class blogController {
  static getAllBlogs = async (req, res) => {
    try {
      const blog = await blogModel.find();
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
    const { title, category, description, thumbnail, user } = req.body;
    try {
        const category = categoryModel.findOne({category: category}) 
      if (title && category && description && thumbnail && user) {
        const newBlog = new blogModel({
          title,
          category,
          description,
          thumbnail,
          user,
        });
        const savedBlog = await newBlog.save();
        if (savedBlog) {
          res.status(201).json({
            message: "Blog added successfully",
            data: savedBlog,
          });
        }
      } else {
        res.status(400).json({
          message: "Please fill all the fields",
        });
      }
    } catch (error) {
      res.status(500).json({
        message: error,
      });
    }
  };
  static getSingleBlog = async (req, res) => {
    const { id } = req.params;
    try {
      const blog = blogModel.findById(id);
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
