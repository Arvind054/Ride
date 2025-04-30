import React, { createContext, useContext } from 'react'
import axios from 'axios';
import toast from 'react-hot-toast';
const RiderContext = createContext();

export const RiderProvider = ({children}) => {
  // Function to Register the Rider
  const handleRiderRegister = async(rider, navigator) =>{
     try{
         const response  = await axios.post(`${import.meta.env.VITE_SERVER_URL}/rider/register`, rider);
         const data = response.data;
         const token = data.token;
         localStorage.setItem('token', token);
          navigator("/");
          toast.success("Registered Successful");
     }catch(e){
         toast.error(e.message);
         return ;
     }
  }
  const handleRiderLogin = async(rider, navigator)=> {
    try{
      const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/rider/login`, rider);
      const data = response.data;
      const token = data.token;
         localStorage.setItem('token', token);
      navigator("/");
      toast.success("Login Successfully");
    }catch(e){
      toast.error(e.message);
      return;
    }
  }
  return (
    <RiderContext.Provider value={{handleRiderRegister,handleRiderLogin}}>{children}</RiderContext.Provider>
  )
}

export const RiderDataContext = ()=>useContext(RiderContext);