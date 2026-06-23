import { User } from "../models/user.models.js";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
import { ApiError } from "../utils/apiError.js";


const isLoggedIn = async function(req,res,next){
    let accessToken = req.cookies?.accessToken
    let _id;
    if(accessToken){
        try {
            _id = await jwt.verify(accessToken , process.env.ACCESS_TOKEN_SECRET)._id;
            const user = await User.findById(_id);
            if(!user){throw new ApiError(401,"Cannot be Authorized !!!")};
            req.user = user;
            next();
        } catch (error) {
            if(error.name==="TokenExpiredError"){
                const refreshToken = req.cookies?.refreshToken;
                if(refreshToken){
                    try {
                        _id = await jwt.verify(refreshToken , process.env.REFRESH_TOKEN_SECRET)._id;
                        const user = await User.findById(_id);
                        if(user.refreshToken !== refreshToken){throw new ApiError(401,"Cannot be Authorized !!!")};
                        req.user = user;
                        accessToken = await user.generateAccessToken();
                        res.cookie("accessToken",accessToken);
                        next();
                    } catch (error) {
                        throw new ApiError(401,"Cannot be Authorized !!!",error)
                    }
                }
                else{
                    throw new ApiError(401,"Cannot be Authorized !!!")
                }
            }
            else{
                throw new ApiError(401,"UnAuthorized!!");
            }
        }
    }
    else{
        throw new ApiError(401,"Please login!!!");
    }
}

export {isLoggedIn};