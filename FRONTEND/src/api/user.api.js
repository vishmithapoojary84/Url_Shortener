import axiosInstance from "./axiosinstance";

export const loginUser = async (password,email) => {
 const {data}  = await axiosInstance.post("/api/auth/login", { email,password });
 return data;
}
export const registerUser = async (name,password,email) => {
 const {data}  = await axiosInstance.post("/api/auth/register", {name,email,password });
 return data;
}
export const logoutUser = async () => {
 const {data}  = await axiosInstance.get("/api/auth/logout");
 return data;
}