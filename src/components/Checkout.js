import React, { useContext, useState } from "react";
import img from "../wardrobe/assets/img/checkout-banner.png";
import Navbar from "./Navbar";
import productcontext from "../context/Productcontext";
import {Link,useNavigate} from "react-router-dom";
export default function Checkout() {
  const navigation=useNavigate()
  const { neworder,total,cart,payment_stripe,details,setdetails } = useContext(productcontext);
  // let [details, setdetails] = useState({
  //   firstname: "",
  //   lastname: "",
  //   email: "",
  //   phonenumber: "",
  //   addressline: "",
  //   city: "",
  //   state: "",
  //   country: "",
  //   zipcode: "",
  //   totalprice:0
  // });
  const [payment, setpayment] = useState("paypal");
  const onchange = async (e) => {
    e.preventDefault();
    setdetails({
      ...details,
      [e.target.name]: e.target.value,
    });
  };

  const onChangePayment = (e) => {
    setpayment(e.target.value);
  }; 

  const handleSubmit = async (e) => {
   e.preventDefault();
   details.totalprice=total
  //   await neworder(details);
    payment_stripe(cart.getitems)
    await localStorage.setItem("details", JSON.stringify(details))
  };
 const onclick=async()=>{
  
// navigation("/thankyou")
 }
  return (
    <>
      <Navbar />
      <img
        src={img}
        className="img-fluid"
        alt="..."
        style={{ height: "25rem", width: "100rem" }}
      ></img>
      <main className="margintop100">
        <section className="checkout-form" id="checkout-form">
          <div className="container inner">
            <div className="checkout-inner">
              <div className="parent-row">
                <form className="checkout-detail-form" onSubmit={handleSubmit} >
                  <div className="checkout-left-section width-6">
                    <h6>Checkout details</h6>
                    <div className="parent-row justify-content-between form-div">
                      <div className="width-4-9">
                        <label>First Name</label>
                        <span className="astrik">&#42;</span>
                        <input
                          type="text"
                          className="input-form"
                          name="firstname"
                          placeholder="First name"
                          required
                          // value={details.firstname}
                          onChange={onchange}
                        />
                      </div>
                      <div className="width-4-9">
                        <label>Last Name</label>
                        <span className="astrik">&#42;</span>
                        <input
                          type="text"
                          className="input-form"
                          name="lastname"
                          id="lastname"
                          placeholder="Last name"
                          required
                          value={details.lastname}
                          onChange={onchange}
                        />
                      </div>
                      <div className="width-4-9">
                        <label>E-mail</label>
                        <span className="astrik">&#42;</span>
                        <input
                          type="text"
                          className="input-form"
                          name="email"
                          placeholder="email@gmail.com"
                          required
                          onChange={onchange}
                        />
                      </div>
                      <div className="width-4-9">
                        <label>Phone Number</label>
                        <span className="astrik">&#42;</span>
                        <input
                          type="text"
                          className="input-form"
                          name="phonenumber"
                          placeholder="0351"
                          required
                          value={details.phonenumber || ""}
                          onChange={onchange}
                        />
                      </div>
                      <div className="width-10">
                        <label>Address</label>
                        <input
                          type="text"
                          className="input-form"
                          name="addressline"
                          placeholder="Address line"
                          required
                          value={details.addressline || ""}
                          onChange={onchange}
                        />
                      </div>
                      <div className="width-10">
                        <label>Country</label>
                        <select
                          class="form-select"
                          id="country"
                          name="country"
                          onChange={onchange}
                        >
                          <option name="country">select country</option>
                          <option name="country" value="AF">
                            Afghanistan
                          </option>
                          <option name="country" value="AW">
                            Aruba
                          </option>
                          <option name="country" value="AU">
                            Australia
                          </option>
                          <option name="country" value="AT">
                            Austria
                          </option>
                          <option name="country" value="KH">
                            Cambodia
                          </option>
                          <option name="country" value="CM">
                            Cameroon
                          </option>
                          <option name="country" value="CA">
                            Canada
                          </option>
                          <option name="country" value="CV">
                            Cape Verde
                          </option>
                          <option name="country" value="KY">
                            Cayman Islands
                          </option>
                          <option name="country" value="CF">
                            Central African Republic
                          </option>
                          <option name="country" value="FI">
                            Finland
                          </option>
                          <option name="country" value="FR">
                            France
                          </option>
                          <option name="country" value="GF">
                            French Guiana
                          </option>
                          <option name="country" value="PF">
                            French Polynesia
                          </option>
                          <option name="country" value="TF">
                            French Southern Territories
                          </option>
                          <option name="country" value="HU">
                            Hungary
                          </option>
                          <option name="country" value="IS">
                            Iceland
                          </option>
                          <option name="country" value="IN">
                            India
                          </option>
                          <option name="country" value="ID">
                            Indonesia
                          </option>
                          <option name="country" value="IR">
                            Iran, Islamic Republic of
                          </option>
                          <option name="country" value="LB">
                            Lebanon
                          </option>
                          <option name="country" value="RO">
                            Romania
                          </option>
                          <option name="country" value="RU">
                            Russian Federation
                          </option>
                          <option name="country" value="SC">
                            Seychelles
                          </option>
                          <option name="country" value="SL">
                            Sierra Leone
                          </option>
                          <option name="country" value="SE">
                            Sweden
                          </option>
                          <option name="country" value="CH">
                            Switzerland
                          </option>
                          <option name="country" value="TM">
                            Turkmenistan
                          </option>
                          <option name="country" value="AE">
                            United Arab Emirates
                          </option>
                          <option name="country" value="GB">
                            United Kingdom
                          </option>
                          <option name="country" value="US">
                            United States
                          </option>
                          <option name="country" value="UM">
                            United States Minor Outlying Islands
                          </option>
                          <option name="country" value="ZW">
                            Zimbabwe
                          </option>
                        </select>
                      </div>
                      <div className="width-10 my-3">
                        <label>City</label>
                        <input
                          type="text"
                          className="input-form"
                          placeholder="City"
                          name="city"
                          required
                          //  value={details.city }
                          onChange={onchange}
                        />
                      </div>
                      <div className="width-4-9">
                        <label>District</label>
                        <input
                          type="text"
                          className="input-form"
                          name="state"
                          placeholder="state"
                          required
                          value={details.state || ""}
                          onChange={onchange}
                        />
                      </div>
                      <div className="width-4-9">
                        <label>Postal Code</label>
                        <input
                          type="text"
                          className="input-form"
                          name="zipcode"
                          placeholder="0000-000"
                          required
                          value={details.zipcode || ""}
                          onChange={onchange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="checkout-right-section width-4">
                    <div className="card">
                      <div className="apply-promo">
                        <label>Coupon code</label>
                        <div className="promo-inner">
                          <input type="text" className="input-form" />
                          <button className="btn">Apply</button>
                        </div>
                      </div>
                      <div className="radio-section">
                        <h5>Payment method</h5>
                        <div className="inner-content">
                          <div className="form-check">
                            <label
                              className="form-check-label"
                              htmlFor="card_payment"
                            >
                              <input
                                className="form-check-input"
                                type="radio"
                                name="payment_method"
                                value="card"
                                id="card_payment"
                                checked={payment === "card"}
                                onChange={onChangePayment}
                              />
                              Credit card
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="payment_method"
                              value="net_banking"
                              id="net_banking_payment"
                              checked={payment === "net_banking"}
                              onChange={onChangePayment}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="net_banking_payment"
                            >
                              Net banking
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="payment_method"
                              value="paypal"
                              id="paypal_payment"
                              checked={payment === "paypal"}
                              onChange={onChangePayment}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="paypal_payment"
                            >
                              Paypal
                            </label>
                          </div>
                          <div className="width-10 form-check tick-box">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="terms"
                              value=""
                              id="terms"
                            />
                            <label className="form-check-label" htmlFor="terms">
                              I have read and agree to the Ativo Kids Terms and
                              Conditions.
                            </label>
                          </div>
                          <button
                            className="btn btn-primary"
                            type="submit"
                            style={{width:"300px",height:"50x"}}
                          // onClick={handleSubmit}
                          >
                            {/* <a
                            href="./success"
                            onClick={handleSubmit}
                            className="btn"
                          >
                            Proceed to payment
                          </a> */}
                            proceed to payment
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
