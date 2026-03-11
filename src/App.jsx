import { useState } from 'react'
import './App.css'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './HomePage/Home/Home'
import Cursos from './Cursos/Cursos'
import Metodologia from './Metodologia/Metodologia'
import Planos from './Planos/Planos'
import Sobre from './About/Sobre/Sobre'

function App() {
  

  return (
    <>
      <Navbar/>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Cursos' element={<Cursos/>}/>
        <Route path='/Metodo' element={<Metodologia/>}/>
        <Route path='/Planos' element={<Planos/>} />
        <Route path='/Sobre' element={<Sobre/>} />
      </Routes>
      <Footer/>



    </>
  )
}

export default App
