import React, { useContext} from 'react';
import productcontext from '../context/Productcontext';
import {useNavigate} from "react-router-dom";
import img from "../wardrobe/assets/img/logo.png"
import {Link} from "react-router-dom"

 export default function Navbar() {
  const navigation = useNavigate();
  
  const {getuser,user,getcart,cart,setsearch,search,theme} = useContext(productcontext);
  const onclick= async()=>{
   await getuser();
    // if(user.success===true){
     navigation("/profile")

    // }
  }
    const oncart=async()=>{
   await getcart();
   if(cart.success===true){
    navigation("/cart")
   }
   else{
    
    navigation("/cart")
   }


    }
    const onchange=(e)=>{
  e.preventDefault();
  setsearch(
    e.target.value
  )

  

    }
    const onsearch=(e)=>{
      e.preventDefault()
    navigation({
      pathname:"/search",
     search:`?name=${search}`
    }) }
   
  return (
    <>
       <nav className={`navbar sticky-top navbar-expand-lg ${theme.backcolor==="black"?"bg-dark":"bg-body-tertiary"} `}>
  <div className="container-fluid">
    <img src={img} style={{height:"50px",width:"80px"}} ></img>
   
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"  data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="" style={{color:theme.backcolor==="black"?"white":"black"}}><i class="fa-solid fa-bars fa-xl"></i></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        {/* <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li> */}
        
        {/* <li className="nav-item  " >
         <Link className="btn " aria-current="page" value="men" to="/search?category=men" >  <strong className='fw-semibold'>men</strong></Link>
        </li>
        <li className="nav-item  ">
          <Link className="btn" aria-current="page" to="/search?category=women"  ><strong className='fw-semibold'>women</strong></Link>
        </li>
        <li className="nav-item  ">
          <Link className="btn " aria-current="page" to="/search?category=kids"   ><strong className='fw-semibold'>kids</strong></Link>
        </li> */}
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:theme.color}}>
           <strong className='fw-semibold' style={{color:theme.textcolor}}>Categories</strong> 
          </a>
          <ul class="dropdown-menu">
            <li>  <Link className="btn " aria-current="page" value="men" to="/search?category=men" >  <strong className='fw-semibold'>men</strong></Link></li>
            <li>  <Link className="btn" aria-current="page" to="/search?category=women"  ><strong className='fw-semibold'>women</strong></Link></li>
            {/* <li><hr class="dropdown-divider"/></li> */}
            <li><Link className="btn " aria-current="page" to="/search?category=kids"   ><strong className='fw-semibold'>kids</strong></Link></li>
          </ul>
        </li>
        
        </ul>
      
        <form className="d-flex" role="search" onSubmit={onsearch}>
        <input className="form-control me-2" type="search" value={search} placeholder="Search" aria-label="Search" onChange={onchange} required/>
        <button className="btn btn-outline-success" type="submit" onSubmit={onsearch}>Search</button>
      </form>
    
      <i className="fa-solid fa-cart-shopping fa-xl mx-3" style={{cursor:"pointer",color:theme.textcolor}} onClick={oncart}></i>
      <i className="fa-solid fa-user fa-xl mx-2" style={{cursor:"pointer",color:theme.textcolor}} onClick={onclick}></i>
    </div>
  </div>
</nav>





    </>
  )}
