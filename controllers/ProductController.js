import ProductModel from "../models/ProductModel.js";

export const addProduct = async (req, res) => {
  try {
    var arrImages = [];
    for (let i = 0; i < req.files.length; i++) {
      arrImages[i] = req.files[i].filename;
    }

    var product = new ProductModel({
      title: req.body.title,
      price: req.body.price,
      ram: req.body.ram,
      description: req.body.description,
      total_product: req.body.total_product,
      category_id: req.body.category_id,
      sub_category_id: req.body.sub_category_id,
      images: arrImages,
    });

    const productData = await product.save();
    res.status(200).send({
      success: true,
      message: "Product details",
      productData,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      error,
      message: "Error in add product",
    });
  }
};
