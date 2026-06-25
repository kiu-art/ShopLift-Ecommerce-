import { Router } from "express";
import { getProviderProducts, getProviderProfile, loginProvider, logoutProvider, registerProvider } from "../controllers/provider.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { isAdminLoggedIn } from "../middlewares/authAdmin.middleware.js";


const router = Router();

router.route("/register").post(registerProvider);

router.route("/login").post(upload.single("avatar"),loginProvider);
    
router.route("/logout").get(logoutProvider);

router.route("/profile").get(isAdminLoggedIn,getProviderProfile);

router.route("/products").get(isAdminLoggedIn,getProviderProducts);

export default router;