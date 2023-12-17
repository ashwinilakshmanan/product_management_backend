import express from "express";
import { isAdmin, requireSignin } from "../middlewares/authMiddleware.js";
import {
  createCategoryController,
  getAllCategoriesController,
  updateCategoryController,
} from "../controllers/CategoryController.js";

const router = express.Router();

//routes
router.post(
  "/create-category",
  requireSignin,
  isAdmin,
  createCategoryController
);

//update category
router.put(
  "/update-category/:id",
  requireSignin,
  isAdmin,
  updateCategoryController
);

//get all category
router.get("/get-category", getAllCategoriesController);

export default router;
