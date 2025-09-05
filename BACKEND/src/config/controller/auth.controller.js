import { cookieOptions } from "../config.js";
import { loginUser, registerUser } from "../services/auth.service.js";
import wrapAsync from "../utils/trycatchrwrapper.js";


export const register_user = wrapAsync( async (req, res) => {
    const {name, email, password} = req.body
     //*service auth service
    const {token,user} = await registerUser({name, email, password})

    req.user = user
    res.cookie("accessToken", token, cookieOptions)
    res.status(200).json({ user, message: "register success" });

})

export const login_user = wrapAsync( async (req, res) => {
    const {email, password} = req.body
     //*service auth service
    const {token,user} = await loginUser({email, password})
    req.user = user
    console.log(user)
    console.log(cookieOptions)
    res.cookie("accessToken", token, cookieOptions)
    res.status(200).json({user:user,message:"login success"})
})

export const logout_user = wrapAsync( async (req, res) => {
    res.clearCookie("accessToken", cookieOptions)
    res.status(200).json({message:"logout success"})
})

export const get_current_user = wrapAsync(async (req, res) => {
  if (!req.user || !req.user._id) {
    return res.status(401).json({ message: "Unauthorized" });
  }});
