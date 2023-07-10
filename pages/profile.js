import React, { useContext } from "react";
import ProfileComp from "../components/profileComp";
import { AuthContext } from "../context/AuthWrapper";
import { useRouter } from "next/router";
function profile()
{
    const {user} = useContext(AuthContext);
  
    const Redirect = () => {
      const router =useRouter()
      router.push('/login');
      return null;
    }
    return (
        user?.uid?
        <ProfileComp /> : <Redirect/>
    )
}
export default profile;