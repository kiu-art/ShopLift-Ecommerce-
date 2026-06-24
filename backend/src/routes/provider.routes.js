import { Router } from "express";
import { loginProvider, registerProvider } from "../controllers/provider.controller.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();

router.route("/register").post(registerProvider);

router.route("/login").post(upload.single("avatar"),loginProvider);

export default router;