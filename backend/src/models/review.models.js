import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema({
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product"
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    rating:{
        type:Number,
        required:true,
        min:[1,"rating cant be less than 1"],
        max:[1,"rating cant be greater than 5"],
    },
    review:{
        type:String,
        trim:true
    }
},{timestamps:true});

export const Review = mongoose.model("Review",ReviewSchema);