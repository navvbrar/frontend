import React, { useContext, useEffect } from 'react'
import Navbar from './Navbar'
import Pic from './Pic'
import {Link} from "react-router-dom" ;
import productcontext from '../context/Productcontext'
export default function Success() {
    const{getorder,order,setspinner,total,cart,details,neworder}=useContext(productcontext)
    var order_deatils;
    useEffect( ()=>{

      setspinner(true)
      // details.totalprice=total
      const detail  = localStorage.getItem("details")
      
        order_deatils  = neworder(JSON.parse(detail));  
        console.log(order_deatils)
      
   
     getorder()
     
    },[])

  return (
    <>
     <Navbar/>
    <Pic/>
    {  order.length === 0?setspinner(true):setspinner(false)}
    
   
            <main className="margintop100">
        <section className="home-page">
          <div className="container">
            <div className="succes-page-inner parent-row justify-content-center text-allign-center">
              <div className="width-10">
                <svg
                  xmlns="https://www.w3.org/2000/svg"
                  width="67"
                  height="67"
                  viewBox="0 0 67 67"
                >
                  <g
                    id="Group_106394"
                    data-name="Group 106394"
                    transform="translate(-43.511 0.489)"
                  >
                    <g
                      id="Group_121"
                      data-name="Group 121"
                      transform="translate(45.011 1.011)"
                    >
                      <circle
                        id="Ellipse_28"
                        data-name="Ellipse 28"
                        cx="32"
                        cy="32"
                        r="32"
                        transform="translate(0 0)"
                        stroke-width="3"
                        stroke="#5eb130"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-miterlimit="10"
                        fill="none"
                      />
                    </g>
                    <path
                      id="Path_115"
                      data-name="Path 115"
                      d="M50,22.578l8.747,8.747L82.071,8"
                      transform="translate(9.54 13.349)"
                      fill="none"
                      stroke="#5eb130"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      stroke-width="3"
                    />
                  </g>
                </svg>
              </div>

              <div className="width-10 success-message">
                <div className="success-message-inner">
                  <section>Your order has been placed</section>

                  <div className="success-row f-flex justify-content-between">
                    <p>Order Id.</p>
                     <p>{order.length ===0 ?"":order[order.length-1]._id }</p> 
                  </div>
                  <div className="f-flex justify-content-between font-weight-bold">
                    <p>Total</p>
                    <p>{order.length === 0 ? "0": total}</p>
                  </div>
                  <div className="full-btn">
                    <Link to="/" className="btn">
                      Continue Shopping
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
              
    </>
  )
}
