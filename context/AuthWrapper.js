import React, { useEffect } from "react";
import {Auth} from '../firebase';
import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext =React.createContext()


function AuthWrapper({children})
{
    const [user,setuser] = React.useState(null);
    const [loading ,setloading ]=React.useState(true);
        
    useEffect(()=>{
        onAuthStateChanged(Auth,( user )=>{
            // console.log("im1")
            if(user){
            // console.log("im2")

                setuser(user)
            }
            else
            {
                setuser('')
            }
        })
            setloading(false)
        },[])

   
    function login(email,password)
    {
        console.log("hihi");
        return signInWithEmailAndPassword(Auth,email,password); 
    }


    function logout()
    {
        return signOut(Auth);
    }


    function forgot(email)
    {
        return sendPasswordResetEmail(Auth,email);
    }

    function signup(email,password)
    {
        console.log("hshs");

        return createUserWithEmailAndPassword(Auth,email,password);
    }

    const store={
        login,
        user,
        logout,
        forgot,
        signup
    }

    return (
<AuthContext.Provider value={store}>
    {/* console.log(loading); */}
    { (!loading) && children}
</AuthContext.Provider>

    )
}

export default AuthWrapper;