import React, { useContext, useState } from 'react'
import productcontext from '../context/Productcontext'
import { useNavigate } from 'react-router-dom'
import "../login_signup.css"
export default function Recoverpassword() {
  const navigation = useNavigate()
  const { otp_req, otp_match } = useContext(productcontext)
  const [matchpass, setmatchpass] = useState("red")
  const [credentials, setcredentials] = useState({ email: "", OTP: null, password: "" })
  const [otpmsg, setotpmsg] = useState({ msg1: null, msg2: null, color: "" })
  let [msg, setmsg] = useState()
  let[validation,setvalidation]=useState()
  const onchange = (e) => {
    // e.preventDefault();
    setcredentials({
      ...credentials, [e.target.name]: e.target.value
    })
    console.log(credentials)
  }
  const matchpassword = (e) => {
     e.preventDefault()
    if (document.getElementById("password").value === document.getElementById("pass2").value) {
      setmatchpass("green")


    }
    else if(document.getElementById("password").value !== document.getElementById("pass2").value) {
      // document.getElementById("pass2").setCustomValidity("password doesn't match")
      setmatchpass("red")
    }
  }
  const on_request = async (e) => {
    e.preventDefault()
    var func_response
    if (credentials.email.length === 0) {
      return null
    }
    else{ 
      func_response =await otp_req(credentials.email)
    }
    
     if(func_response === true){
      console.log("we are in if ")
      setmsg(`An OTP has been Sent to the entered email account `)
       document.getElementById("Email").setAttribute("disabled",true)
       document.getElementById("button_submit").setAttribute("disabled",true)
     }
     else{
      setmsg(`please enter correct credentials `)
      setTimeout(() => {
        setmsg(null)
      }, 2000);
     }
  }
  const onmatching_otp = async (e) => {
    
     e.preventDefault()
     const password_regex =  new RegExp("^(?=.*[0-9])"
     + "(?=.*[a-z])(?=.*[A-Z])"
     + "(?=.*[@#$%^&+=])"
     + "(?=\\S+$).{8,20}$")



     if(!password_regex.test(credentials.password)){
 setvalidation("password  should contain" 
 +  " Atleast One upper case letter"    
 +  " Atleast One Lower case letter"    
 +  " Atleast One Special Character"    
 +  " Atleast One Number "  )
 return 0
     }
     if(document.getElementById("password").value !== document.getElementById("pass2").value){
      setvalidation("passwords not matching")
      return 0
     }
     else{
      setvalidation(null)
     }
     var func_response
   func_response =await otp_match(credentials)
    if (func_response === true) {
      setotpmsg({
        color: "green",
        msg1: "password changed"

      })
      setTimeout(() => {
        setotpmsg({
          msg1: null
        })
        navigation("/login")
      }, 2000)

    }
   else if (func_response === false) {
      setotpmsg({
        msg2: "varification failed",
        color: "red"
      })

    }
  }
  return (
    <>
    
      <div className="card text-center" style={{ width:"400px", margin: "150px 600px" , background:"#c8c8c8"}}>
        <div className="card-header h5 text-white bg-primary">Password Reset</div>
        <div className="card-body px-5">
          <p className="card-text py-2" >
            {msg}
          </p>
          <form onsubmit="return false;"  style={{ marginTop: "70px" }}>
            <div className="form-outline">
              <input type="email" id="Email" onChange={onchange} name="email" className="form-control my-3" placeholder='Email Input' pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$" required minLength={2} />

            </div>
            <button  onClick={on_request} id="button_submit" className="btn btn-primary w-100">send email OTP</button>
          </form>
          <form >
          <div className="form-outline ">
            <input type="text" id="typeEmail" onChange={onchange} name="OTP" className="form-control my-3 mt-4" placeholder='Enter OTP' required />

          </div><span style={{ color: otpmsg.color }}>{otpmsg.msg2}</span>

          <div className="form-outline ">
            <input type="password" id="password" name='password' onChange={(e) => { onchange(e); matchpassword(e) }} className="form-control my-4 mt-4" placeholder='Enter New Password' required />
            <label>{validation}</label>
          </div>
          <div className="form-outline ">
            <input type="password" id="pass2" onChange={matchpassword} className="form-control my-3 mt-4" placeholder='Confirm Password' style={{ borderBlockColor: matchpass, borderWidth: "3px" }} required/>

          </div>
          <button  className="btn btn-primary w-100" onClick={onmatching_otp}>reset password</button>
          <div style={{ color: otpmsg.color }}>
            {otpmsg.msg1}
          </div>
          <div className="d-flex justify-content-between mt-4">
            <a className="" href="#">Login</a>
            <a className="" href="#">Register</a>
          </div>
          </form>
        </div>
      </div>
    </>
  )
}
