import React from 'react'
import Navbar from './components/Navbar'
import CardsSection from './components/CardsSection'
import AboutUs from './components/AboutUs'
import Home from './components/Home'
import Footer from './components/Footer'

const App = () => {
  return (
     <>
      <Navbar/>
      <Home/>
      <CardsSection/>
      <AboutUs/>
      <Footer/>
     </>
  )
}

export default App
