import { User } from "../models/user.models.js";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
import { ApiError } from "../utils/apiError.js";


const isLoggedIn = async function(req,res,next){
    const accessToken = req.cookies?.accessToken
    if(accessToken){
        const {_id} = await jwt.verify(accessToken , process.env.ACCESS_TOKEN_SECRET);
        const user = await User.findById(_id);
        if(!user){throw new ApiError(401,"Cannot be Authorized !!!")};
        req.user = user;
        next();
    }
    else{
        const refreshToken = req.cookies?.refreshToken;
        if(refreshToken){
            const {_id} = await jwt.verify(refreshToken , process.env.REFRESH_TOKEN_SECRET);
            const user = await User.findById(_id);
            if(user.refreshToken !== refreshToken){throw new ApiError(401,"Cannot be Authorized !!!")};
            req.user = user;
            accessToken = user.generateAccessToken();
            res.cookie("accessToken",accessToken);
            next();
        }
        else{
            throw new ApiError(401,"Cannot be Authorized !!!")
        }
    }
}

export {isLoggedIn};