import { Product } from "../models/product.models.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

const createProduct = asyncHandler(async (req,res)=>{
    const {name,description,warranty,price} = req.body;
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
        const newProduct = await Product.create({name:name,description:description,image:productImage,provider:providerId,warranty:warranty,price:price})   
        req.provider.products.push(newProduct._id);
        await req.provider.save();
    } catch (error) {
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
    const searchProduct = req.params;
    try {
        const products = await Product.find({
            name:{$regex:`${searchProduct}$` , $options:"i"}
        });
        console.log(products);
        res.send(200).json(products);
    } catch (error) {
        ApiError(403,"Error in Product Search.",error);
        res.send(403);
    }
})

export {createProduct,deleteProduct,searchProduct};