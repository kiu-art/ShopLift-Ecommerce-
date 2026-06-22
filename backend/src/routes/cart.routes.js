import { Router } from "express";
import { isLoggedIn } from "../middlewares/auth.middleware.js";
import { cart } from "../controllers/cart.controller.js";

const router = Router();

router.route("").post(isLoggedIn,cart)

export default router;