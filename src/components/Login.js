import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import productcontext from "../context/Productcontext";

export default function Login() {
  const { valid, setvalid } = useContext(productcontext);

  const [input, setinput] = useState({ email: "", password: "" });

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

  return (
    < > 
    <div >
      <div  >
        <header>
          <nav>
            <div className="logo-parent">
              <a className="heading" href="./">
                <img src="./assets/img/logo.png" alt="logo" width="80px" />
              </a>
            </div>
          </nav>
        </header>

        <main id="main"  >
          <section className="login-page"  >
            <div className="login-content" style={{backgroundColor:"black"}}> 
              <h1>Login</h1>
              <form >
                <input
                
                  type="email"
                  required
                  name="email"
                  id="email"
                  onChange={onchange}
                  placeholder="email"
                  style={{color:"white",borderColor:valid.color}}
                />
                <input
                style={{borderColor:valid.color}}
                  type="password"
                  required
                  name="password"
                  id="password"
                  onChange={onchange}
                  minlength="8"
                  maxlength="20"
                  placeholder="password"
                />
                <button type="submit" onClick={Login}>Sign in</button>
              </form>{" "}
              <Link to="/signup" className="mx-3" style={{ color: "white" }}>
                Don't have an account?
              </Link>
              <Link to="/recoverpass" style={{ color: "white" }}>
                 Forgot Password
              </Link>
            </div>
          </section>
        </main>
        <div style={{ color:`${valid.color} ` }}>
         <p className="text-center"  style={{marginTop:"100px"}}> <strong >{valid.message}</strong></p>
        </div>
      </div>
      </div>
    </>
  );
}
