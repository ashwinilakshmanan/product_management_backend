import express from "express";
import {
  loginUser,
  registerUser,
  testController,
} from "../controllers/UserController.js";
import { isAdmin, requireSignin } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);
router.get("/test", requireSignin, isAdmin, testController);

export default router;
