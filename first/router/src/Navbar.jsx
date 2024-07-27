import React,{useState} from 'react'
import { SiDatabricks } from "react-icons/si";

import { GiHamburgerMenu } from "react-icons/gi";
import './index.css'


function Navbar() {
    const[nav,setNav]=useState(false)
    const handleNav=()=>setNav(!nav)
  return (
    <div className='navbar'>
        <div className='container'>
            <div className='logo'>
                <SiDatabricks className='icon'/>
               
                <h1>Secured</h1>
            </div>
            <ul className={nav?'nav-menu active':'nav-menu'}>
                <li>Home</li>
                <li>Recovery</li>
                <li>Cloud</li>
                <li>Contact</li>
                
                <button>Sign in</button> 
            </ul>
            <div className='GiHamburgerMenu'onClick={handleNav}></div>
            <GiHamburgerMenu className='icon'/>
            
            

            </div>
        </div>
      
    
  )
}

export default Navbar
