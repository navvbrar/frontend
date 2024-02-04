import React from 'react';
import Productitem from './productitem';
import Navbar from './Navbar';
import Products from './Products';
import Pic from './Pic';
import Spinner from './Spinner';
import Footer from './Footer';



export default function Home() {
  return (
    <>
     <Navbar/>
     
     <Pic/>
     <Spinner/>
     
     <Products/>
     <Footer/>

    </>
  )
}
