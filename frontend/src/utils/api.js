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

export const adminCreateProduct = async(productData)=>{
    const response = await axiosInstance.post("/admin/product/create",productData,{headers:{"Content-Type":"multipart/form-data"}});
    return response.data;
}

export const adminLogout = async()=>{
    const response = await axiosInstance.get("/admin/logout");
    return response.data;
}

export const adminProfile = async()=>{
    const response = await axiosInstance.get("/admin/profile");
    return response.data;
}

export const adminProducts = async()=>{
    const response = await axiosInstance.get("/admin/products");
    return response.data;
}

export const adminDeleteProduct = async(_id)=>{
    const response = await axiosInstance.delete(`/admin/product/delete/${_id}`)
}

export const adminOrders = async ()=>{
    const response = await axiosInstance.get('/admin/orders');
    return response.data;
}

export const userSearch = async (searchProduct)=>{
    const response = await axiosInstance.get(`/users/search/${searchProduct}`)
    return response.data;
}