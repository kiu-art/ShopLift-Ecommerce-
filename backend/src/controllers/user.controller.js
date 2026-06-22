import {asyncHandler} from "../utils/asyncHandler.js"
import {User} from "../models/user.models.js"
import { ApiError } from "../utils/apiError.js";
import { Address } from "../models/address.models.js";

const registerUser = asyncHandler(async (req,res)=>{
    console.log(req.body)
    const {userName,name,email,password,dateOfBirth,phoneNo,address} = req.body;
    const existedUser = await User.findOne({
        $or:[
            {userName},
            {email}
        ]
    })
    if(existedUser) throw new ApiError(409,"User with email or userName already exist");
    let userAddress
    try {
        userAddress = await Address.create(address);
    } catch (error) {
        throw new ApiError(409,"User cant be Created please try again later.",error)
    }
    let newUser
    try {
        newUser = await User.create({userName,name,email,password,dateOfBirth,phoneNo,address : userAddress._id })
    } catch (error) {
        userAddress = await Address.findByIdAndDelete(userAddress._id)
        console.log(error)
        throw new ApiError(409,"User cant be Created please try again later.",error)
    }
    return res.status(201).send("User is Created");
})
export {registerUser};