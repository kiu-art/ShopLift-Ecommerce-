import { Router } from "express";
import { createProduct } from "../controllers/product.controller.js";
import { isLoggedIn } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/create").post(isLoggedIn,createProduct);

export default router;