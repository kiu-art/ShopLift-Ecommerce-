import mongoose, { model } from "mongoose";

const ProviderSchema = new mongoose.Schema({
    address:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Address",
        required:[true,"Address of Company is Required"],
    },
    name:{
        type:String,
        trim:true,
        required:true,
    },
    phoneNo:{
        type:Number,
        required:[true,"Phone No is Required"],
        trim:true
    },
    email:{
        type:String,
        required:[true,"Email is required"],
        trim:true,
        lowercase:true,
    },
    gstNo:{
        type:String,
        required:[true,"GST NO is required"],
        trim:true,
    }
},{timestamps:true});

export const Provider = mongoose.model("Provider",ProviderSchema);