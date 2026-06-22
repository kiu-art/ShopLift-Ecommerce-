import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const UserSchema = new mongoose.Schema({
    userName:{
        type: String,
        required:[true,"User Name is required"],
        lowercase:true,
        trim:true,
        unique:true
    },
    name:{
        type: String,
        required:[true,"Name is required"],
        trim:true
    },
    email:{
        type: String,
        required:[true,"Email is required"],
        lowercase:true,
        trim:true,
        unique:true
    },
    password:{
        type:String,
        required:[true,"Password is Required"],
        trim:true
    },
    dateOfBirth:{
        type:Date,
        required:[true,"Date of Birth is Required"],
        max:[new Date(),"Date of Birth can not be in future"]
    },
    address:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Address"
    },
    phoneNo:{
        type: Number,
        required:[true,"Mobile No is Required"],
        trim:true
    },
    reviews:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Review"
        }
    ],
    refreshToken:{
        type: String,
    }
},{timestamps:true})


UserSchema.pre("save",async function(){
    if(!this.isModified("password")) return;
    this.password = await bcrypt.hash(this.password,10);
})

UserSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password,this.password);
}

UserSchema.methods.generateAccessToken = async function(){
    return await jwt.sign({
        _id:this._id,
        userName:this.userName,
        email:this.email
    },process.env.ACCESS_TOKEN_SECRET,{
        expiresIn:process.env.ACCESS_TOKEN_EXPIRY
    })
}

UserSchema.methods.generateRefreshToken = async function(){
    const refreshToken = await jwt.sign({
        _id:this._id
    },process.env.REFRESH_TOKEN_SECRET,{
        expiresIn:process.env.REFRESH_TOKEN_EXPIRY
    })
    this.refreshToken = refreshToken;
    return refreshToken;
}

export const User = mongoose.model("User",UserSchema);