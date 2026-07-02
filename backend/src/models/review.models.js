import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    rating:{
        type:Number,
        required:true,
        min:[1,"rating cant be less than 1"],
        max:[5,"rating cant be greater than 5"],
    },
    comment:{
        type:String,
        trim:true
    }
},{timestamps:true});

export const Review = mongoose.model("Review",ReviewSchema);