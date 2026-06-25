import mongoose, { model } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const ProviderSchema = new mongoose.Schema({
    address:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Address",
        required:[true,"Address of Company is Required"],
    },
    password:{
        type:String,
        required:true,
        trim:true
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
    dateOfBirth:{
        type:Date,
        required:true,
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
    },
    refreshToken:{
        type:String,
        trim:true
    },
    products:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Product"
        }
    ],
    orders:[
        {
            product:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"Product",
                required:true,
            },
            status:{
                type:String,
                enum:["Not Shipped", "On Delivery", "Shipped"],
                default:"Not Shipped"
            },
            customer:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"User",
                required:true
            }
        }
    ]
},{timestamps:true});

ProviderSchema.pre("save",async function(){
    if(!this.isModified("password")) return;
    this.password = await bcrypt.hash(this.password,10);
})

ProviderSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password,this.password);
}

ProviderSchema.methods.generateAccessToken = async function(){
    return await jwt.sign({
        _id:this._id,
        providerName:this.providerName,
        email:this.email
    },process.env.ACCESS_TOKEN_SECRET,{
        expiresIn:process.env.ACCESS_TOKEN_EXPIRY
    })
}

ProviderSchema.methods.generateRefreshToken = async function(){
    const refreshToken = await jwt.sign({
        _id:this._id
    },process.env.REFRESH_TOKEN_SECRET,{
        expiresIn:process.env.REFRESH_TOKEN_EXPIRY
    })
    this.refreshToken = refreshToken;
    return refreshToken;
}

export const Provider = mongoose.model("Provider",ProviderSchema);