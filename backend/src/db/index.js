import mongoose from "mongoose";
import dotenv from "dotenv";
const connectDB = async ()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}?appName=Cluster0`)
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

export default connectDB;