import React, { createContext, useContext, useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast';
const UserContext = createContext();
export const UserProvider = ({children}) => {
    const [userData, setUserData] = useState('');

// Function For User Login  Request ot Backend.
    const handleUserLogin = async (user, navigator)=>{
        try{
           const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/user/login`, user);
           const data = response.data;
           const token = data.token;
           localStorage.setItem('token', token);
           navigator("/");
           toast.success("Login Successfully");
        }catch(e){
            toast.error(e.message);
            return ;
        }
    }

// Function For user Register, Request to Backend.
    const handleUserRegister = async(user, navigator)=>{
        try{
            const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/user/register`, user);
            const data = response.data;
            const token = data.token;
            localStorage.setItem('token', token);
            navigator("/");
            toast.success("Registered Successfully");
        }catch(e){
            toast.error(e.message);
            return ;
        }
    }
  return (
    <UserContext.Provider value={{handleUserLogin , handleUserRegister}}>{children}</UserContext.Provider>
  )
}

export const UserContextData = () =>useContext(UserContext)