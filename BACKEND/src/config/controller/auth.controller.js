import { cookieOptions } from "../config.js";
import { loginUser, registerUser } from "../services/auth.service.js";
import wrapAsync from "../utils/trycatchrwrapper.js";

export const register_user=wrapAsync(async(req,res)=>{
  //add jwt register
  const {name,email,password}=req.body; 
  //*service auth service
  const token=await registerUser({name,email,password});

  res.cookie("accessToken",token,cookieOptions);
  res.status(201).json({message:"User registered successfully"});
})

export const login_user=wrapAsync(async(req,res)=>{
 const {email,password}=req.body;
 //*service auth service
 const token=await loginUser({email,password});

 res.cookie("accessToken",token,cookieOptions);
 res.status(200).json({message:"User logged in successfully"});
})
