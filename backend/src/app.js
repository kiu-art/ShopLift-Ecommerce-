import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";


const app = express();
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"))
app.use(cookieParser())

import userRouter from "./routes/user.routes.js"
import cartRouter from "./routes/cart.routes.js"

import providerRouter from "./routes/provider.routes.js"
import productRouter from "./routes/product.routes.js"
app.use("/api/v1/users",userRouter);

app.use("/api/v1/cart",cartRouter);

app.use("/api/v1/admin/product",productRouter);

app.use("/api/v1/admin/",providerRouter);


export {app};