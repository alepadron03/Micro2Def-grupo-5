import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import NotFound from "./pages/NotFound"

export default function App(){
  return(
    
    <BrowserRouter>
    <Routes>
      <Route path='home' element={<Home />} />
      <Route path='login' element={<Login />} />
      <Route path='register' element={<Register />} />
      <Route path='SabasNieves' element={<NotFound />} />
      <Route path='*' element={<Home />} />
  
    </Routes>
    
    </BrowserRouter>
    
    
    




  )
}
