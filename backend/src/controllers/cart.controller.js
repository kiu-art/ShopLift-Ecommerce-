import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { User } from "../models/user.models.js";


const cart = asyncHandler(async (req,res)=>{
    const product = await req.user.populate("cart.product","name image price rating");
    res.status(200).json(product);
})

export {cart};