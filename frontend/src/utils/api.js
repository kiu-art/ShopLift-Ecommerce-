import { axiosInstance } from "./axios";

export const register = async(formData)=>{
    const response = await axiosInstance.post("/users/register",formData);
    return response.data;
}

export const login = async (credentials)=>{
    const response = await axiosInstance.post("/users/login",credentials)
    return response.data;
}

export const adminLogin = async (credentials)=>{
    const response = await axiosInstance.post("/admin/login",credentials);
    return response.data;
}

export const adminRegister = async (formData)=>{
    const response = await axiosInstance.post("/admin/register",formData);
    return response.data;
}