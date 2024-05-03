import React, { useContext, useEffect, useState } from "react";
import Navbar from "./Navbar";
import Pic from "./Pic";
import img from "../wardrobe/assets/img/logo.png";
import img1 from "../wardrobe/assets/img/car-shop-icon.png";
import img2 from "../wardrobe/assets/img/cart-banner.jpg";
import img3 from "../wardrobe/assets/img/home.png";
import { Link,useNavigate } from "react-router-dom";
import productcontext from "../context/Productcontext";
import Cartnote from "./Cartnote";

export default function Cart() {
  const navigation=useNavigate();
  const { total,setloading ,cart,addpromo,payment_stripe} = useContext(productcontext);
  let [a, seta] = useState();
  const [promotion,setpromotion]= useState({promo:"",totalprice:0})
  const [promo_res,setpromo_res]= useState({message:"",color:""})

  useEffect(() => {
    seta(total);
    if(total===0){
      document.getElementById("promo").setAttribute("disabled",true)
    }
  }, [total]);
const onclick=()=>{
if(a===0){}
else{
  setloading(50)
  
  
  navigation("/checkout")
  setloading(100)
}
}
const onchange=(e)=>{
 setpromotion({...promotion,[e.target.name]:e.target.value.toUpperCase()})  

}
const onpromo= async()=>{
  promotion.totalprice = total
 let x= await addpromo(promotion)
if(x===true){
  setpromo_res({
    message:"hurray! you got discount",
    color:"green"
  })
 document.getElementById("promo").setAttribute("disabled",true)
}
else{
  setpromo_res({
    message:"please check the code ",
    color:"red"
  })
}
}
  return (
    <>
      <body className="my-4">
        <header>
          <nav className="parent-row">
            <div className="logo-parent width-1">
              <a className="heading" href="./">
                <img src={img} alt="logo" width="80px" />
              </a>
            </div>
            <ul className="width-3 parent-row">
              <li>
                <a href="./category/men/">
                  <h1>Men</h1>
                </a>
              </li>
              <li>
                <a href="./category/women/">
                  <h1>Women</h1>
                </a>
              </li>
              <li>
                <a href="./category/child/">
                  <h1>Kids</h1>
                </a>
              </li>
            </ul>
            <ul className="parent-row width-1">
              <li className="cart"></li>
              <li></li>
            </ul>
          </nav>
        </header>

        <div className="inner-page-banner">
          <img className="bd-placeholder-img" src={img2} alt="banner" />
          <div className="inner-page-banner-text f-flex">
            <h1>Shopping Cart</h1>
          </div>
        </div>
        <section className="breadcrumbs">
          <div className="container">
            <ol>
              <li>
                <img src={img3} alt="home" />
              </li>
              <li>
                <Link
                  to="/
                    "
                >
                  Home
                </Link>
              </li>
              <li>Cart</li>
            </ol>
          </div>
        </section>

        <section className="h-100 gradient-custom">
          <div className="container py-5">
            <div className="row d-flex justify-content-center my-4">
              <div className="col-md-8">
                <div className="card mb-4">
                  <div className="card-header py-3">
                    <h4 className="mb-0">your cart</h4>
                  </div>
                  <div className="card-body">
                    <Cartnote />
                  </div>
                </div>
                <div className="card mb-4">
                  <div className="card-body">
                    <p>
                      <strong>Expected shipping delivery</strong>
                    </p>
                    <p className="mb-0">12.10.2020 - 14.10.2020</p>
                  </div>
                </div>
                <div className="card mb-4 mb-lg-0">
                  <div className="card-body">
                    <p>
                      <strong>We accept</strong>
                    </p>
                    <img
                      className="me-2"
                      width="45px"
                      src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                      alt="Visa"
                    />
                    <img
                      className="me-2"
                      width="45px"
                      src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                      alt="American Express"
                    />
                    <img
                      className="me-2"
                      width="45px"
                      src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                      alt="Mastercard"
                    />
                    <img
                      className="me-2"
                      width="45px"
                      src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.webp"
                      alt="PayPal acceptance mark"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4">
                  <div className="card-header py-3">
                    <h5 className="mb-0">Summary</h5>
                  </div>
                  <div className="card-body">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                        HST
                        <span>{cart.tax}</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                        Shipping
                        <span>0$</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                        grossprice
                        <span>{cart.grossprice}</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                       <button class="btn btn-success" id="promo" onClick={onpromo}>ADD PROMO</button> 
                        <input type="text" name="promo"  onChange={onchange} value={promotion.promo } style={{borderColor:promo_res.color}} ></input>
                        <label>{promo_res.message}</label>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                        <div>
                          <strong>Total amount</strong>
                          <strong>
                            <p className="mb-0">(including VAT)</p>
                          </strong>
                        </div>
                        <span>
                          <strong>{a}</strong>
                        </span>
                      </li>
                    </ul>

                    <button
                      type="button"
                      className="btn btn-primary btn-lg btn-block"
                    onClick={onclick}
                    >
                      Go to checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer>
          &copy; Copyright 2021. All Rights Reserved.
          <br />
          <a href="mailto:support@wardrobe.com">support@wardrobe.com</a>
          <script src="assets/js/cart-numbers.js"></script>
          <script src="assets/js/data.js"></script>
          <script src="assets/js/cart.js"></script>
        </footer>
      </body>
    </>
  );
}
