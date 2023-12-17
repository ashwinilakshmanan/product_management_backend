import express from "express";
import { isAdmin, requireSignin } from "../middlewares/authMiddleware.js";
import { createCategoryController } from "../controllers/createCategoryController.js";

const router = express.Router();

//routes
router.post(
  "/create-category",
  requireSignin,
  isAdmin,
  createCategoryController
);

export default router;
