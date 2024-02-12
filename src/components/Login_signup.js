import React from 'react'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import "../login_signup.css"
export default function Login_signup() {
    
    const[forminput,setforminput]= useState({fname:"",mname:"",lname:"",uname:"",email:"",phone:"",password:""})
    const [validation,setvalidation]=useState({message:"",fname_color:"",lname_color:"",uname_color:"",email_color:"",password_color:"",phone_color:""})
  const [input, setinput] = useState({ email: "", password: "" });
  const [valid,setvalid] = useState({
    message:"",
    color:""
  })

  let navi = useNavigate();

  const onchange = (e) => {
    e.preventDefault();
    setinput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const Login = async (e) => {
    e.preventDefault();
    const { email, password } = input;
    const email_regex =  new RegExp("[a-z0-9]+@[a-z]+\.[a-z]{2,3}")
    if (!email_regex.test(email)){
     setvalid({
         message:"email should be a valid email",
         color:"red"
     })
     setTimeout(() => {
      setvalid({
        message:"",
        color:""
      });
    }, 3000);
     return 0
    }
    

    const loginuser = await fetch("https://ecommerce-backend3-i4yr.onrender.com/api/auth", {
      headers: { "content-type": "application/json" },
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    const response = await loginuser.json();

    if (response.success === true) {
      localStorage.setItem("token", response.token);

      setTimeout(() => {
        navi("/ ");
      }, 1000);

      {
        <Navbar />;
      }
      setvalid({
        color: "green",
        message: "logged in successfully",
      });
      setTimeout(() => {
        setvalid(null);
      }, 3000);
    } else {
      setvalid({ message: "username or password may be wrong", color: "red" });
      setTimeout(() => {
        setvalid({
          color:"",
          message:""
        });
      }, 3000);
    }
  };
  
  
 const on_signup_change =(e)=>{
  e.preventDefault();
  setforminput({
  ...forminput,[e.target.name]:e.target.value

  })
  

 }
//  console.log(forminput.phone + parseInt(forminput.phone))
const timeout_for_validation= ()=>{

 setTimeout(() => {
   setvalidation({message:"",fname_color:"",lname_color:"",uname_color:"",email_color:"",password_color:"",phone_color:""})
 },2000);

}


   
   const signup = async(e)=>{
    e.preventDefault();
    const {fname,mname,lname,uname,email,phone,password}=forminput;
    const regex_for_name = new RegExp("^[a-zA-Z0-9]+$")
    if(fname.length<5){
        setvalidation({
            message:"name should be atleast 5 characters",
            fname_color:"red"
        })
        timeout_for_validation()
        return 0
    }
    else if(!regex_for_name.test(fname)){
      setvalidation({
          message:"name can contain only alphabets and numbers",
          fname_color:"red"
      })
      timeout_for_validation()
      return 0
  }
   else if(uname.length<5){
        setvalidation({
            message:"user name should be atleast 5 characters",
            uname_color:"red"
        })
        timeout_for_validation()
        return 0
    }
   else if(lname.length<2){
        setvalidation({
            message:"last name should be atleast 2 characters",
            lname_color:"red"
        })
        timeout_for_validation()
        return 0
    }
    else if(!regex_for_name.test(lname)){
      setvalidation({
          message:" last name can contain only alphabets and numbers",
          lname_color:"red"
      })
      timeout_for_validation()
      return 0
  }
   else if(phone.length<10){
        setvalidation({
            message:" please enter a valid phone number",
            phone_color:"red"
        })
        timeout_for_validation()
        return 0
    }
   const email_regex =  new RegExp("[a-z0-9]+@[a-z]+\.[a-z]{2,3}")
   if (!email_regex.test(email)){
    setvalidation({
        message:"email should be a valid email",
        email_color:"red"
    })
    timeout_for_validation()
    return 0
   }
   const password_regex =  new RegExp("^(?=.*[0-9])"
                       + "(?=.*[a-z])(?=.*[A-Z])"
                       + "(?=.*[@#$%^&+=])"
                       + "(?=\\S+$).{8,20}$")
     if (!password_regex.test(password)){
        setvalidation({
            message:"password  should contain" 
            +  " Atleast One upper case letter"    
            +  " Atleast One Lower case letter"    
            +  " Atleast One Special Character"    
            +  " Atleast One Number "    ,
            password_color:"red"
        })
        timeout_for_validation()
        return 0
     }    


      const signupuser = await fetch("https://ecommerce-backend3-i4yr.onrender.com/api/account",{

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
    setvalidation({
        message:"account created successfully",
        color:"green"
    })
    setTimeout(()=>{
        navi("/")
    },2000)

   
}
else if (response.success=== false){
    setvalidation({
        message:response.error,
        color:"red"
    })
}


   } 
  
  return (
    <>
    <body style={{background:"#c8c8c8",font:`600 16px/18px 'Open Sans',sans-serif`,color:"#6a6f8c",margin:"0px"}}>
      <div class ="row" >  
	<div class="col-md-6 mx-auto p-0">
		<div class="card" style={{width:"500px",left:"100px",height:"700px"}}>
<div class="login-box">
	<div class="login-snip">
		<input id="tab-1" type="radio" name="tab"  class="sign-in"  defaultChecked/><label for="tab-1" class="tab"   >Login</label>
		<input id="tab-2" type="radio" name="tab"  class="sign-up"    /><label for="tab-2" class="tab"   >Sign Up</label>
		<div class="login-space">
			<div class="login">
				<div class="group" >
					<label for="user4"  class="label">Email</label>
					<input id="user4" type="email" name='email' class="input"  onChange={onchange} style={{color:valid.color}} placeholder="Enter your email"/>
				</div>
				<div class="group">
					<label for="pass4" class="label">Password</label>
					<input id="pass4" type="password" name='password' style={{color:valid.color}} class="input" data-type="password" placeholder="Enter your password"  onChange={onchange}/>
				</div>
				<div class="group">
					<input id="check" type="checkbox" class="check" />
					<label for="check"><span class="icon"></span> Keep me Signed in</label>
				</div>
				<div class="group">
					<button  class="button" onClick={Login} > Log in</button>
          <p className='mx-5 my-4' style={{color:valid.color}}>{valid.message} </p> 
				</div>
				<div class="hr"></div>
				<div class="foot">
					<Link to="/recoverpass">Forgot Password?</Link>
				</div>
			</div>
			<div class="sign-up-form">
				<div class="group">
					<label for="user"   class="label"><p style={{color:validation.fname_color}}>first name</p></label>
					<input id="user" pattern="[a-zA-Z0-9]+" name='fname' type="text" onChange={on_signup_change} class="input" placeholder="First name" style={{color:validation.fname_color}}/>
				</div>
				<div class="group">
					<label for="user" class="label"><p style={{color:validation.lname_color}}>last name</p></label>
					<input id="user1" name='lname' type="text" onChange={on_signup_change} class="input" placeholder="Last name" style={{color:validation.lname_color}}/>
				</div>
				<div class="group">
					<label for="user" class="label" ><p style={{color:validation.uname_color}}>username</p></label>
					<input id="user2" name='uname' type="text" onChange={on_signup_change} class="input" placeholder=" Username" style={{color:validation.uname_color}}/>
				</div>
                <div class="group">
					<label for="pass" class="label"><p style={{color:validation.email_color}}>Email</p></label>
					<input id="pass0" name='email' type="text" onChange={on_signup_change} class="input" placeholder="Enter your email address" style={{color:validation.email_color}}/>
				</div>
                <div class="group">
					<label for="pass" class="label"><p style={{color:validation.phone_color}}>phone number</p></label>
					<input id="pass1" name='phone' type="number" onChange={on_signup_change} class="input" placeholder="Enter your phone number" style={{color:validation.phone_color}}/>
				</div>
				<div class="group">
					<label for="pass" class="label"><p style={{color:validation.password_color}}>password</p></label>
					<input id="pass" name='password' type="password" onChange={on_signup_change} class="input" data-type="password" placeholder="Create your password" style={{color:validation.password_color}}/>
				</div>
				
				<div class="group" >
					<button  class="button"  onClick={signup}> Sign up</button>
				</div>
        <p >{validation.message}</p>  
				<div class="hr"></div>
				<div class="foot">
        
					{/* <label for="tab-1">Already Member?</label> */}
				</div>
			</div>
		</div>
	</div>
</div> 
</div>
</div>
</div>
</body>
    </>
  )
}
