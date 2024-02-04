import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Home2 from './Home2'
import Footer from './Footer';
import {useNavigate} from "react-router-dom"

export default function Home3() {
 
  return (
    <>

     <Navbar/> 
     <Home2/>
     <Footer/>
  
    </>
  )
}
