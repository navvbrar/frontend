import React,{useContext, useEffect} from 'react';
import productcontext from '../context/Productcontext';
import{useNavigate} from "react-router-dom";
import Productitem from './productitem';

export default function Products() {
    const {getproducts,allproducts} =useContext(productcontext);
    const navigation=useNavigate();
    
    useEffect(()=>{
   if(localStorage.getItem("token")){
     getproducts();
    }
     else{
   navigation("/signup")
     }
},[])





  return (
    <> 
       <div className=' container row my-3 mx-4'  >
      <div className="container mx-3">{allproducts.length===0 && "noting to show here"}</div>
       { allproducts.map((allproduct)=>{
  return <Productitem key={allproduct._id} products={allproduct}   />
 })}
    </div>
    
    </>
  )
}
