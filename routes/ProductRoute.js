import express from "express";
import multer from "multer";
import path from "path";

import { requireSignin, isAdmin } from "../middlewares/authMiddleware.js";
import { addProduct } from "../controllers/ProductController.js";

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/productImages", function (err, success) {
      if (err) {
        throw err;
      }
    });
  },
  filename: function (req, file, cb) {
    const name = Date.now() + "-" + file.originalname;
    cb(null, name, function (error, success) {
      if (error) {
        throw error;
      }
    });
  },
});

const upload = multer({ storage: storage });

//add product
router.post(
  "/add-product",
  upload.array("images"),
  requireSignin,
  isAdmin,
  addProduct
);

export default router;
