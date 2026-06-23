import { Router } from "express";
import { createProduct, deleteProduct } from "../controllers/product.controller.js";
import { isLoggedIn } from "../middlewares/auth.middleware.js";
import {upload} from "../middlewares/multer.middleware.js";

const router = Router();

router.route("/create").post(isLoggedIn,upload.single("productImage"),createProduct);
router.route("/delete/:productId").delete(isLoggedIn,deleteProduct);

export default router;