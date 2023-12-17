import mongoose from "mongoose";

const subCategorySchema = new mongoose.Schema({
  category_id: {
    type: String,
    required: true,
  },
  sub_category: {
    type: String,
    required: true,
  },
});

export default mongoose.model("SubCategory", subCategorySchema);
