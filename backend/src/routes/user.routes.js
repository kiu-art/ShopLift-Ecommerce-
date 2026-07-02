import { Router } from "express";
import { loginUser, registerUser } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { createReview, getProduct, searchProduct } from "../controllers/product.controller.js";
import { isLoggedIn } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(registerUser);

router.route("/login").post(upload.single("avatar"),loginUser);

router.route("/search/:searchProduct").get(isLoggedIn,searchProduct);

router.route("/product/:productId").get(isLoggedIn,getProduct);

router.route("/create/review").post(isLoggedIn,createReview);

export default router;