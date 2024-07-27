// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import Cloud from "./Cloud"
import Contact from "./Contact"
import Footer from "./Footer"
import Hero from "./Hero"
import Navbar from "./Navbar"
import Recovery from "./Recovery"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Hero/>
      <Recovery/>
      <Cloud/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
