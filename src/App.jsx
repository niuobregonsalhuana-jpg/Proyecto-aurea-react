import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css' 
import Navbar from './components/Navbar'
import Hero from './components/Hero'
// import Popup from './components/Popup'
// import MascotaPchan from './components/MascotaPchan'
import Footer from './components/Footer'
import SobreAurea from './pages/SobreAurea'
import Productos from './pages/Productos'


//Mis paginas
// import SobreAurea from './pages/SobreAurea'

const images = [
  "./img1.png",
  "./img2.png",
  "./img3.png",
  "./img4.png",
  "./img5.png",
  "./img6.png",
];

function App () {
  return (
    <>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path='/' element= {<Hero />}></Route>
              <Route path='/SobreAurea'element={<SobreAurea />} />
              <Route path="Productos" element={<Productos />} />
              
            </Routes>  
            
            <Footer />
          </BrowserRouter>
    </>
  )
}

export default App