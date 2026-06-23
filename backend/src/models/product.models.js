import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Product Name is Required!!"],
        trim:true
    },
    description:{
        type:String,
        required:[true,"Description is Required!!"],
        trim:true
    },
    image:{
        type:String,
        required:[true,"image is required"],
        trim:true
    },
    provider:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Provider",
        required:[true,"Company is Required!!"],
        trim:true
    },
    warranty:{
        type:String,
        trim:true,
        required:true
    },
    price:{
        type:Number,
        required:[true,"Price is Required"],
        trim:true,
        min:[1,"Price cant be less than or equal to 0"]
    },
    rating:{
        type:Number,
        default:0
    },
    review:[
        {   
            type:mongoose.Schema.Types.ObjectId,
            ref:"Review"
        }
    ],

},{timestamps:true})

export const Product = mongoose.model("Product",ProductSchema);