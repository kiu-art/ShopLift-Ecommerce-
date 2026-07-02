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
    const refreshToken = await newUser.generateRefreshToken();
    const accessToken = await newUser.generateAccessToken();
    console.log(refreshToken,accessToken);
    await res.cookie("accessToken",accessToken);
    await res.cookie("refreshToken",refreshToken);
    await newUser.save({validateBeforeSave:false})
    return res.status(201).send("User is Created");
})


const loginUser = asyncHandler(async(req,res)=>{
    console.log(req.body)
    const {email,password} = req.body;
    if(!email || !password){
        ApiError(401,"Both fields are required !!");
    }
    const user = await User.findOne({email});
    if(!user.isPasswordCorrect(password)){
        ApiError(401,"Wrong details!!");
    }
    const refreshToken = await user.generateRefreshToken();
    const accessToken = await user.generateAccessToken();
    console.log(refreshToken,accessToken);
    await res.cookie("accessToken",accessToken);
    await res.cookie("refreshToken",refreshToken);
    await user.save({validateBeforeSave:false})
    return res.status(201).send("Logged in");
})


export {registerUser,loginUser};