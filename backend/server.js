import { setServers } from "dns";
setServers(["8.8.8.8", "1.1.1.1"]);

import connectDB from "./src/db/index.js";

import { configDotenv } from "dotenv";
import {app} from "./src/app.js";

configDotenv();

connectDB()
.then(()=>{
    app.listen(process.env.PORT_NO||5000,()=>{
        console.log("Server started at port: ",process.env.PORT_NO||5000)
    })
})
.catch((error)=>{
    console.log("Mongo DB connection failed!!! ",error);
})