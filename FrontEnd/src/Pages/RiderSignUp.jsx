import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const RiderSignUp = () => {
   const navigator = useNavigate();
   const [Firstname, setFirstname] = useState('');
   const [Lastname, setLastname] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [RiderData, setRiderData] = useState({});
   const handleSubmit = (e)=>{
    e.preventDefault();
    if(!Firstname || !email || !password){
      toast.error("All Fields are Required.");
      return ;
    }
    setRiderData({
      fullname:{
        firstname:Firstname,
        lastname:Lastname
      },
      email:email,
      password:password,
    })
    navigator("/");
   }
  return (
    <div className="min-h-screen bg-black text-yellow-400 flex items-center justify-center">
      <div className="bg-gray-900 p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Rider SignUp</h2>

        <form className="space-y-4" onSubmit={(e)=>handleSubmit(e)}>
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block mb-1">First Name</label>
              <input
                type="text"
                className="w-full p-3 rounded-lg bg-black border border-yellow-400 text-yellow-400 placeholder-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="First name"
                value={Firstname}
                onChange={(e)=>setFirstname(e.target.value)}
              />
            </div>

            <div className="w-1/2">
              <label className="block mb-1">Last Name</label>
              <input
                type="text"
                className="w-full p-3 rounded-lg bg-black border border-yellow-400 text-yellow-400 placeholder-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Last name"
                value={Lastname}
                onChange={(e)=>setLastname(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="block mb-1">Email</label>
            <input
              type="email"
              className="w-full p-3 rounded-lg bg-black border border-yellow-400 text-yellow-400 placeholder-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block mb-1">Password</label>
            <input
              type="password"
              className="w-full p-3 rounded-lg bg-black border border-yellow-400 text-yellow-400 placeholder-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
          <div className="text-sm text-center">
            Already a User ?{" "}
            <a href="/login" className="underline hover:text-yellow-300">
            Login
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-400 text-black font-semibold py-3 rounded-lg hover:bg-yellow-500 transition"
          >
            Create Account
          </button>
        </form>
        <button
            type="submit"
            className="w-full bg-green-400 text-black font-semibold py-3 mt-8 rounded-lg hover:bg-yellow-500 transition"
            onClick={()=>navigator("/rider-signup")}
          > 
            Create Rider Account
          </button>
      </div>
    </div>
  );
};

export default RiderSignUp;
