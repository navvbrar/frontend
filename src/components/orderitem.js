import React, { useContext, useEffect, useState } from 'react'
import productcontext from '../context/Productcontext'
import Progressbar from './Progressbar'

export default function Orderitem(props) {
    const{order}=props
    const {productdetails,singleproduct} = useContext(productcontext)
   
    
  return (
    <>
      <section className="vh-100 gradient-custom-2">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-10 col-lg-8 col-xl-6">
        <div className="card card-stepper" style={{borderRadius: "16px"}}>
          <div className="card-header p-4">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <p className="text-muted mb-2"> Order ID <span className="fw-bold text-body">{order._id}</span></p>
                <p className="text-muted mb-0"> Place On <span className="fw-bold text-body">{order.date}</span> </p>
              </div>
              <div>
                <h6 className="mb-0"> <a href="#">View Details</a> </h6>
              </div>
            </div>
          </div>
          <div className="card-body p-4">
            <div className="d-flex flex-row mb-4 pb-2">
              <div className="flex-fill">
                <h5 className="bold">{order.product_info.name}</h5>
               <p className="bold">Quantity: <span className="text-body" > {order.cartdata[0].quantity}</span></p>
                <h4 className="mb-3"> ${order.total}<span className="small text-muted"> </span></h4>
                <p className="text-muted">Tracking Status on: <span className="text-body">11:30pm, Today</span></p>
              </div>
              <div>
                <img className="align-self-center img-fluid" style={{display:"inline-block", objectFit:"cover"}}
                  src={order.product_info.image.url} width="250" height="200px" />
              </div>
            </div>
          
  
    <div className="row d-flex   h-100">
      <div className="col-12">
        <div className="card card-stepper text-black" style={{borderRadius: "16px"}}>

          <div className="card-body p-5">

          

            {/* <ul id="progressbar-2" className="d-flex justify-content-between mx-0 mt-0 mb-5 px-0 pt-0 pb-2">
              <li  > <Progressbar/></li>
              <li className="step0 active text-center" id="step2"></li>
              <li className="step0 active text-center" id="step3"></li>
              <li className="step0 text-muted text-end" id="step4"></li>
             
            </ul> */}
            <div className='mb-0' style={{width:"400px" , margin:"0px"}}  > <Progressbar order={order} /></div>

            <div className="d-flex justify-content-start">
              <div className="d-lg-flex align-items-center">
                <i className="fas fa-clipboard-list fa-xl me-lg-4 mb-3 mb-lg-0"></i>
                <div>
                  <p className="fw-bold mb-1">Order</p>
                  <p className="fw-bold mb-0">Processed</p>
                </div>
              </div>
              <div className="d-lg-flex align-items-center">
                <i className="fas fa-box-open fa-xl me-lg-4 mb-3 mb-lg-0"></i>
                <div>
                  <p className="fw-bold mb-1">Order</p>
                  <p className="fw-bold mb-0">Shipped</p>
                </div>
              </div>
              <div className="d-lg-flex align-items-center">
                <i className="fas fa-shipping-fast fa-xl me-lg-4 mb-3 mb-lg-0"></i>
                <div>
                  <p className="fw-bold mb-1">Order</p>
                  <p className="fw-bold mb-0">En Route</p>
                </div>
              </div>
              <div className="d-lg-flex align-items-center">
                <i className="fas fa-home fa-xl me-lg-4 mb-3 mb-lg-0"></i>
                <div>
                  <p className="fw-bold mb-1">Order</p>
                  <p className="fw-bold mb-0">Arrived</p>
                </div>
              </div>
            </div>

        

        </div>
      </div>
    </div>
  </div>

             
            
          </div>
          <div className="card-footer p-4">
            <div className="d-flex justify-content-between">
              <h5 className="fw-normal mb-0"><a href="#!">Track</a></h5>
              <div className="border-start h-100"></div>
              <h5 className="fw-normal mb-0"><a href="#!">Cancel</a></h5>
              <div className="border-start h-100"></div>
              <h5 className="fw-normal mb-0"><a href="#!">Pre-pay</a></h5>
              <div className="border-start h-100"></div>
              <h5 className="fw-normal mb-0"><a href="#!" className="text-muted"><i className="fas fa-ellipsis-v"></i></a>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}
