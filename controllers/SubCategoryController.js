import SubCategoryModel from "../models/SubCategoryModel.js";

//add subcategory
export const createSubCategory = async (req, res) => {
  try {
    const checkSubCategory = await SubCategoryModel.find({
      category_id: req.body.category_id,
    });
    if (checkSubCategory.length > 0) {
      let checking = false;
      for (let i = 0; i < checkSubCategory.length; i++) {
        if (
          checkSubCategory[i]["sub_category"].toLowerCase() ===
          req.body.sub_category.toLowerCase()
        ) {
          checking = true;
          break;
        }
      }

      if (checking === false) {
        const subCategory = new SubCategoryModel({
          category_id: req.body.category_id,
          sub_category: req.body.sub_category,
        });
        const newSubCategory = await subCategory.save();
        res.status(200).send({
          success: true,
          message: "created sub category",
          newSubCategory,
        });
      } else {
        res.status(200).send({
          success: true,
          message:
            "This sub category (" +
            req.body.sub_category +
            ") is already exists",
        });
      }
    } else {
      const subCategory = new SubCategoryModel({
        category_id: req.body.category_id,
        sub_category: req.body.sub_category,
      });
      const newSubCategory = await subCategory.save();
      res.status(200).send({
        success: true,
        message: "created sub category",
        newSubCategory,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      error,
      message: "error in sub category",
    });
  }
};
