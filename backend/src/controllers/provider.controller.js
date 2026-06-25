import {asyncHandler} from "../utils/asyncHandler.js"
import {Provider} from "../models/provider.models.js"
import { ApiError } from "../utils/apiError.js";
import { Address } from "../models/address.models.js";

const registerProvider = asyncHandler(async (req,res)=>{
    console.log(req.body)
    const {gstNo,name,email,password,dateOfBirth,phoneNo,address} = req.body;
    const existedProvider = await Provider.findOne({email})
    if(existedProvider) throw new ApiError(409,"Provider with email already exist");
    let providerAddress
    try {
        providerAddress = await Address.create(address);
    } catch (error) {
        throw new ApiError(409,"Provider cant be Created please try again later.",error)
    }
    let newProvider
    try {
        newProvider = await Provider.create({gstNo,name,email,password,dateOfBirth,phoneNo,address : providerAddress._id })
    } catch (error) {
        providerAddress = await Address.findByIdAndDelete(providerAddress._id)
        console.log(error)
        throw new ApiError(409,"Provider cant be Created please try again later.",error)
    }
    const refreshToken = await newProvider.generateRefreshToken();
    const accessToken = await newProvider.generateAccessToken();
    console.log(refreshToken,accessToken);
    await res.cookie("accessToken",accessToken);
    await res.cookie("refreshToken",refreshToken);
    await newProvider.save({validateBeforeSave:false})
    return res.status(201).send("Provider is Created");
})


const loginProvider = asyncHandler(async(req,res)=>{
    console.log(req.body)
    const {email,password} = req.body;
    if(!email || !password){
        ApiError(401,"Both fields are required !!");
    }
    const provider = await Provider.findOne({email});
    if(!provider.isPasswordCorrect(password)){
        ApiError(402,"Wrong details!!");
    }
    const refreshToken = await provider.generateRefreshToken();
    const accessToken = await provider.generateAccessToken();
    console.log(refreshToken,accessToken);
    await res.cookie("accessToken",accessToken);
    await res.cookie("refreshToken",refreshToken);
    await provider.save({validateBeforeSave:false})
    return res.status(201).send("Logged in");
})


const logoutProvider = asyncHandler(async(req,res)=>{
    res.clearCookie("accessToken");
    res.clearCookie("refreshToken");
    console.log("logged out")
    return res.status(200).send("Logged out");
})

const getProviderProfile = asyncHandler(async(req,res)=>{
    const providerData = (await Provider.findById(req.provider._id).select("name email dateOfBirth phoneNo gstNo"));
    if(!providerData) throw new ApiError(404,"Provider not found");
    console.log("data sent",providerData)
    return res.status(200).json(providerData);
})

const getProviderProducts = asyncHandler(async (req,res)=>{
    const providerProducts = (await Provider.findById(req.provider._id).populate("products").select("products")).products;
    console.log("Product data sent",providerProducts);
    return res.status(200).json(providerProducts);
})

const getOrders = asyncHandler(async (req,res)=>{
    await req.provider.populate([
        {
            path:"orders.product",
            select:"name image price"
        },
        {
            path:"orders.customer",
            select:"name address",
            populate:{
                path:"address"
            }
        }
    ]);

    return res.status(200).json({
        orders: req.provider.orders
    });
});

export {registerProvider,loginProvider,logoutProvider,getProviderProfile,getProviderProducts,getOrders};