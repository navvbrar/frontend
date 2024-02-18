import React, { useContext, useEffect } from 'react'
import productcontext from '../context/Productcontext.js'
import Orderitem from './orderitem.js'

export default function Showorders() {
    const {order,productdetails,singleproduct,theme}= useContext(productcontext)
     
       var x=[...order]
        x.reverse()
      
     
   
  return (
    <>
    <div  className=' '>
    < div className='' style={{backgroundColor:theme.backcolor}}>
     <div>{order.length===0?"no orders yet":""}</div>
       <div>
        {  x.map((o)=>{
        

          return <Orderitem key= {o._id} order={o} />

        })  } 
       </div>
       </div>
       </div>
    </>
  )
}
