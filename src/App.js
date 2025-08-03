import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutMe from './components/Aboutme'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <AboutMe/>
      <Services/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
