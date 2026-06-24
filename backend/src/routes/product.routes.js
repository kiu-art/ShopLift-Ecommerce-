import { Router } from "express";
import { createProduct, deleteProduct } from "../controllers/product.controller.js";
import { isAdminLoggedIn } from "../middlewares/authAdmin.middleware.js";
import {upload} from "../middlewares/multer.middleware.js";

const router = Router();

router.route("/create").post(isAdminLoggedIn,upload.single("productImage"),createProduct);
router.route("/delete/:productId").delete(isAdminLoggedIn,deleteProduct);

export default router;