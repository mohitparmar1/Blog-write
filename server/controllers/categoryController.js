import categoryModel from "../models/categoryModel.js";

class categoryController {
  static getAllCategories = async (req, res) => {
    try {
      const fetchAllcategories = await categoryModel.find({});
      res.status(200).json({
        message: "All categories",
        data: fetchAllcategories,
      });
    } catch (error) {
      res.status(500).json({
        message: "error occured at catch block",
      });
    }
  };

  static addNewCategory = async (req, res) => {
    try {
      const { title } = req.body;
      const categoryExist = await categoryModel.findOne({ title });
      if (categoryExist) {
        res.status(400).json({
          message: "category already exist",
        });
      } else {
        const newCategory = new categoryModel({ title });
        await newCategory.save();
        res.status(200).json({
          message: "category added successfully",
          data: newCategory,
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "error occured at catch block",
      });
    }
  };
}

export default categoryController;
