import React, { useState } from 'react';
import {useNavigate,Link} from "react-router-dom";
import "../App.css";
import img from "../wardrobe/assets/img/cart-banner.jpg"

export default function Signup() {
  const[forminput,setforminput]= useState({fname:"",mname:"",lname:"",uname:"",email:"",phone:"",password:""})
  const navigation= useNavigate();
 const onchange =(e)=>{
  e.preventDefault();
  setforminput({
  ...forminput,[e.target.name]:e.target.value

  })
  

 }
 console.log(forminput.phone + parseInt(forminput.phone))



   
   const signup = async(e)=>{
    e.preventDefault();
    const {fname,mname,lname,uname,email,phone,password}=forminput;
    
   const signupuser = await fetch("https://ecommerce-backend3-i4yr.onrender.com/api/auth/api/account",{

  headers:{"content-type":"application/json"},
  method:"POST",
  body:JSON.stringify({
   name:fname,
   email:email,
   phonenumber:parseInt(phone),
   username:uname,
   password:password

  })



   })
   const response = await signupuser.json()
   console.log(response)
   if(response.success===true){
   localStorage.setItem("token",response.token)
   console.log(response.token)
   navigation("/")
   


   }


   } 


  return (
    <>
       <div className="signup-body"  >
      
        <header>
       
            <nav>
                <div className="logo-parent">
                    <a className="heading" href="./">
                        <img src="./assets/img/logo.png" alt="logo" width="80px"/>
                    </a>
                </div>               
            </nav>
        </header>
        

      
        <main id="main" >
            <section className="login-page" >
                <div className="login-content" style={{backgroundColor:'black'}}>
                    <h1>Create Account</h1>
                    <form action="./">
                        <input type="text" name="fname" id="fname" onChange={onchange} required maxLength="20" placeholder="First name"/>
                        <input type="text" name="mname" id="mname" onChange={onchange} maxLength="20" placeholder="Midde name"/>
                        <input type="text" name="lname" id="lname" onChange={onchange} required maxLength="20" placeholder="Last name"/>
                        <input type="text" name="uname" id="uname" onChange={onchange} required maxLength="20" placeholder="User name"/>
                        <input type="email" name="email" id="email" onChange={onchange}  required  placeholder="Email"/>
                        <input type="tel" name="phone" id="phone" onChange={onchange} required maxLength="15" placeholder="Phone number"/>
                        <input type="password" name="password" onChange={onchange} id="password" required minLength="8" maxLength="20"
                            placeholder="Choose password"/>
                        <button onClick={signup}>Sign up</button>
                    </form>
                    <Link to="/login" style={{color:"white"}}>Have account?</Link>
                </div>
            </section>

        </main>
      
    </div>
    </>
  
  )}

