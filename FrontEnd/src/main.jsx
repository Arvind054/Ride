import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import {UserProvider} from './Context/UserContext.jsx'
import { RiderProvider } from './Context/RiderContext.jsx';
import { AuthProvider } from './Context/AuthContext.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <RiderProvider>
    <BrowserRouter>
    <AuthProvider>
    <App />
    </AuthProvider>
    </BrowserRouter>
    <Toaster/>
    </RiderProvider>
    </UserProvider>
  </StrictMode>,
)
