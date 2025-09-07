import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Login from './components/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cadastro from './components/Cadastro'
import Registros from './components/Registros'
import Datasets from './components/Datasets'
import NotFound from './components/NotFound'


function App() {
  
  return(
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/cadastro" element={<Cadastro/>}/>
      <Route path="/registros" element={<Registros/>}/>
      <Route path="/datasets" element={<Datasets/>}/>
      <Route path="*" element={<NotFound/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
