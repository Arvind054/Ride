import './App.css'
import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from './Pages/Home';
import UserLogin from './Pages/UserLogin';
import UserSignUp from './Pages/UserSignUp';
import RiderLogin from './Pages/RiderLogin';
import RiderSignUp from './Pages/RiderSignUp';
function App() {
  return (
     
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/login' element={<UserLogin></UserLogin>}/>
        <Route path='/signup' element={<UserSignUp></UserSignUp>}/>
        <Route path='/rider-login' element={<RiderLogin></RiderLogin>}/>
        <Route path='/rider-signup' element={<RiderSignUp></RiderSignUp>}/>
      </Routes>
  
  )
}

export default App
