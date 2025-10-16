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


//Mis paginas
// import SobreAurea from './pages/SobreAurea'

function App () {
  return (
    <>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path='/' element= {<Hero />}></Route>
              <Route path='/SobreAurea'element={<SobreAurea />} />
            </Routes>  
            <Footer />
          </BrowserRouter>
    </>
  )
}

export default App