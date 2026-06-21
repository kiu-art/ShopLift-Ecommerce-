import mongoose from "mongoose";

const AddressSchema = new mongoose.Schema({
    street:{
        type: String,
        required:[true,"Street is required"],
    },
    city:{
        type: String,
        required:[true,"City is required"],
    },
    state:{
        type: String,
        required:[true,"State is required"],
    },
    postalCode:{
        type: Number,
        required:[true,"Postal Code is required"],
    },
    country:{
        type: String,
        required:[true,"Country is required"],
    }
})

export const Address = mongoose.model("Address",AddressSchema)