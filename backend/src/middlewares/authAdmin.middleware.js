import { Provider } from "../models/provider.models.js";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
import { ApiError } from "../utils/apiError.js";


const isAdminLoggedIn = async function(req,res,next){
    let accessToken = req.cookies?.accessToken
    let _id;
    if(accessToken){
        try {
            _id = await jwt.verify(accessToken , process.env.ACCESS_TOKEN_SECRET)._id;
            const provider = await Provider.findById(_id);
            if(!provider){throw new ApiError(401,"Cannot be Authorized !!!")};
            req.provider = provider;
            next();
        } catch (error) {
            if(error.name==="TokenExpiredError"){
                const refreshToken = req.cookies?.refreshToken;
                if(refreshToken){
                    try {
                        _id = await jwt.verify(refreshToken , process.env.REFRESH_TOKEN_SECRET)._id;
                        const provider = await Provider.findById(_id);
                        if(provider.refreshToken !== refreshToken){throw new ApiError(401,"Cannot be Authorized !!!")};
                        req.provider = provider;
                        accessToken = await provider.generateAccessToken();
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

export {isAdminLoggedIn};