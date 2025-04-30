import React from "react";
import { createContext, useContext, useState } from "react";
const AuthContext = createContext();

export const AuthProvider = ({children})=>{
   const [isAuth, setIsAuth] = useState(false);
   const AuthValidator = (navigator)=>{
        if(localStorage.getItem('token')){
            setIsAuth(true);
            navigator("/user/home");
        }else{
            return ;
        }
   }
    return (
        <AuthContext.Provider value={{AuthValidator}}>{children}</AuthContext.Provider>
    )
}

export const AuthData =()=> useContext(AuthContext);