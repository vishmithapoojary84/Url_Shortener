

import { findUserByEmail ,createUser, findUserByEmailAndPassword} from "../dao/user.dao.js";
import { ConflictError , UnauthorizedError } from "../utils/ErorrHandler.js";
import { signToken } from "../utils/helper.js";

export const registerUser=async({name,email,password})=>{
  //*dao user dao
  const user=await findUserByEmail(email);
  if(user) throw new ConflictError("User already exists");

  const newUser=await createUser({name,email,password});
  const token=await signToken({id:newUser._id});
  return {token,user:newUser};
}

export const loginUser=async({email,password})=>{
  const user=await findUserByEmailAndPassword(email);
  if(!user||!user.comparePassword(password)) throw new UnauthorizedError("Invalid Credentials");
const isPasswordValid =await user.comparePassword(password)
if(!isPasswordValid) throw new Error("Invalid email or password")
  const token= signToken({id:user._id});
  return {token,user};
}