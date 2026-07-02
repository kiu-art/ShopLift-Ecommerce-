import { Product } from "../models/product.models.js";
import { Review } from "../models/review.models.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

const createProduct = asyncHandler(async (req,res)=>{
    const {name,description,warranty,price,category} = req.body;
    console.log(req.body);
    console.log(req.provider);
    console.log(req.file)
    const providerId = req.provider._id;
    let productImage
    try {
        productImage = (await uploadOnCloudinary(req.file.path)).url;
    } catch (error) {
        throw new ApiError(409,error);
    }
    try {
        const newProduct = await Product.create({name:name,description:description,image:productImage,category:category,provider:providerId,warranty:warranty,price:price})   
        req.provider.products.push(newProduct._id);
        await req.provider.save();
    } catch (error) {
        console.error(error);
        throw new ApiError(409,"Error on Product Creation!!");
    }
    return res.status(201).send("Product created Successfully!!")
})

const deleteProduct = asyncHandler( async (req,res)=>{
    const {productId} = req.params;
    const product = await Product.findById(productId);
    if(!product){
        throw new ApiError(404,"Product not found!!");
    }
    const providerId = req.provider._id;
    if(product.provider.toString() === providerId.toString()){
        await Product.findByIdAndDelete(productId);
        await req.provider.products.pull(productId);
        await req.provider.save();
    }
    else{
        throw new ApiError(409,"Forbidden!!");
    }
    return res.status(200).json({message:"Product have been deleted!!"});
})


const searchProduct = asyncHandler(async (req,res)=>{
    const searchProduct = req.params.searchProduct;
    try {
        console.log(searchProduct)
        const products = await Product.find({
            name:{$regex:searchProduct , $options:"i"}
        }).select("name image price rating category _id");
        console.log(products);
        return res.status(200).json(products);
    } catch (error) {
        console.error(error);
        throw new ApiError(403,"Error in Product Search.",error);
        return res.status(403);
    }
})

const getProduct = asyncHandler(async (req,res)=>{
    const {productId} = req.params;
    try {
        console.log(productId)
        const data = await Product.findById(productId).populate("provider","name").populate("review");
        console.log(data);
        return res.status(201).json(data);
    } catch (error) {
        console.error(error);
        throw new ApiError(408,"Cant get Product data",error);
    }
    return res.status(408);
})

const createReview = asyncHandler(async(req,res)=>{
    const {reviewerName,reviewComment,reviewRating,_id} = req.body;
    console.log(req.body);
    try {
        const review = await Review.create({name:reviewerName,comment:reviewComment,rating:reviewRating});
        await Product.findByIdAndUpdate(_id,{
            $push:{
                review:review._id
            }
        });
        res.status(201).json(review);
    } catch (error) {
        console.error(error);
        throw new ApiError(306,"Review upload Failed",error);
    }
    return res.status(306);
})

export {createProduct,deleteProduct,searchProduct,getProduct,createReview};