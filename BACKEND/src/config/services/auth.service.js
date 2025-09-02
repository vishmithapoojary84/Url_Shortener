

import { findUserByEmail ,createUser} from "../dao/user.dao.js";
import { ConflictError } from "../utils/ErorrHandler.js";
import { signToken } from "../utils/helper.js";

export const registerUser=async({name,email,password})=>{
  //*dao user dao
  const user=await findUserByEmail(email);
  if(user) throw new ConflictError("User already exists");

  const newUser=await createUser({name,email,password});
  const token=await signToken({id:newUser._id});
  return token;
}

export const loginUser=async({email,password})=>{
  const user=await findUserByEmail(email);
 

  if(!user||user.password!==password) throw new Error("Invalid Credentials");

  const token= signToken({id:user._id});
  return token;
}