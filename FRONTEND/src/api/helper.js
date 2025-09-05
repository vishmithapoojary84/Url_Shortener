import { redirect } from "@tanstack/react-router";

import { store } from "../../../FRONTEND/src/store/store";
import { getCurrentUser } from "./user.api";
import { login } from "../store/slice/authSlice";
export const checkAuth = async({context}) => {
try{
  const {queryClient,store}=context
  const user =await queryClient.ensureQueryData({
    queryKey:['currentUser'],
    queryFn:getCurrentUser,

  })
if(!user) return false
    store.dispatch(login(user))

    const {isAuthenticated}=store.getState().auth
    if (!isAuthenticated) return false;

    return true
}
catch(error)
{
  console.log(error)
  return  redirect({to:"/auth"})
 
}

const  auth =store.getState().auth;
if(!auth.isAuthenticated){
  throw redirect ({to:"/auth"})
}
};
