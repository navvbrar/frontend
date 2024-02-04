import React, { useContext } from 'react';
import productcontext from '../context/Productcontext';
import Cartitem from './Cartitem';

export default function Cartnote() {
    const {cart}=useContext(productcontext);
    
    if(!cart.length===0){
     var items= cart.getitems.product_id
     }
  return (
    <> 
    <div>
    <div className="container mx-3">{  cart.length===0 && "no notes yet"} </div>
      {  cart.length===0 ?"cart empty":
       cart.getitems.map((item)=>{

     return <Cartitem key={item._id} item={item}/>


      })}
      </div>
    </>
  )
}
