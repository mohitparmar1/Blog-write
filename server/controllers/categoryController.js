import categoryModel from "../models/categoryModel.js";
class categoryController {
  static getAllCategories(req, res) {
    try {
      const fetchAllcategories = categoryModel.find({});
      res.status(200).json({
        message: "All categories",
        data: fetchAllcategories,
      });
    } catch (error) {
      res.status(500).json({
        message: error,
      });
    }
  }
  static addNewCategory = async (req, res) => {
    try {
      const findCategory = categoryController.findOne({
        category: req.body.category,
      });
      if (findCategory) {
        res.status(400).json({
          message: "Category already exists",
        });
      } else {
        const newCategory = new categoryModel.create({
          category: req.body.category,
        });
        const savedCategory = await newCategory.save();
        if (savedCategory) {
          res.status(201).json({
            message: "Category added successfully",
            data: savedCategory,
          });
        }
      }
    } catch (error) {
      res.status(500).json({
        message: error,
      });
    }
  };
}

export default categoryController;
