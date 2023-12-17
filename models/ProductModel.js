import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  category_id: {
    type: String,
    required: true,
  },
  sub_category_id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  ram: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  total_product: {
    type: Number,
    required: false,
  },
  images: {
    type: Array,
    required: true,
  },
});

export default mongoose.model("Products", productSchema);
