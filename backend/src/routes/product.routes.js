import { Router } from "express";
import { createProduct, deleteProduct, searchProduct } from "../controllers/product.controller.js";
import { isAdminLoggedIn } from "../middlewares/authAdmin.middleware.js";
import {upload} from "../middlewares/multer.middleware.js";
import { isLoggedIn } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/create").post(isAdminLoggedIn,upload.single("productImage"),createProduct);
router.route("/delete/:productId").delete(isAdminLoggedIn,deleteProduct);
router.route("/search/:searchName").get(isLoggedIn,searchProduct);

export default router;