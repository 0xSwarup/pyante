import express from "express";
import {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
//router object
const router = express.Router();

//routing
//Register || METHOD POST
router.post("/register", registerController);

//Login || POST
router.post("/login", loginController);

//Forgot passsword || POST
router.post("/forgot-password", forgotPasswordController);

//test routes
router.get("/test", requireSignIn, isAdmin, testController);

//protected user routes
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200)({ ok: true });
});

//protected admin routes
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

export default router;
