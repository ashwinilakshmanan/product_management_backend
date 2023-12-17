import express from 'express';
import { isAdmin, requireSignin } from '../middlewares/authMiddleware.js';
import { createSubCategory } from '../controllers/SubCategoryController.js';

const router = express.Router();

//add sub-category route
router.post('/add-sub-category',requireSignin,isAdmin,createSubCategory)

export default router;