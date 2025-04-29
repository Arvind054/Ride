import React from 'react'
import { Link } from "react-router";

const Home = () => {
  return (
    <div>
  
        <div className='h-screen w-full flex flex-col justify-between bg-black'>
            <div className='text-yellow-300'>
            <h2>Get started</h2>
            <Link to="/login" className='bg-yellow-400 text-white py-3 px-3 rounded m-50' >Get Started</Link>
            </div>
        </div>
    </div>
  )
}

export default Home