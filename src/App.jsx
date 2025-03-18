import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import NotFound from "./pages/NotFound"
import Contacto from './pages/Contacto'
import PiedraIndio from './pages/PiedraIndio'
import PicoNa from './pages/PicoNa'
import CruzP from './pages/CruzP'
import Foro from './pages/Foro'

export default function App(){
  return(
    
    <BrowserRouter>
    <Routes>
      <Route path='home' element={<Home />} />
      <Route path='login' element={<Login />} />
      <Route path='Contacto' element={<Contacto />} />
      <Route path='Foro' element={<Foro />} />
      <Route path='register' element={<Register />} />
      <Route path='SabasNieves' element={<NotFound />} />
      <Route path='PiedraIndio' element={<PiedraIndio />} />
      <Route path='PicoNa' element={<PicoNa />} />
      <Route path='CruzP' element={<CruzP />} />
      <Route path='*' element={<Home />} />


  
    </Routes>
    
    </BrowserRouter>
    
    
    




  )
}

