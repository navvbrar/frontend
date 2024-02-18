import React, { useContext, useState } from 'react';
import productcontext from '../context/Productcontext';
import{Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";


export default function Profilepage() {
    const navigation= useNavigate();
    const [editprofile,seteditprofile]= useState("name");
    
   const onedit_profile = (e)=>{
    seteditprofile(e.target.id);
  

   }


    const onclick=()=>{
    localStorage.removeItem("token");
    navigation("/loginsignup")

    }
    const Onadminwindow = ()=>{
      navigation("/adminpage")
    }
    const {user,getorder,order,theme,settheme}=useContext(productcontext)
    const onorder_req = async()=>{
   await getorder()
   console.log(order)
   navigation("/orders")
    }
   const ontheme_change = ()=>{
    if(document.getElementById("flexSwitchCheckDefault").checked === true){
      settheme({
        backcolor:"black",
        textcolor:"white"
      })
     
    }
    else{
      settheme({
        backcolor:"white",
        textcolor:"black"
      }) 
     
    }
   }
  return (
    <>
      <section style={{backgroundColor: theme.backcolor}}>
  <div className="container py-5">
    <div className="row">
      <div className="col">
        <nav aria-label="breadcrumb" className="bg-light rounded-3 p-3 mb-4">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
           
            <li className="breadcrumb-item active" aria-current="page">User Profile</li>
          </ol>
        </nav>
      </div>
    </div>

    <div className="row">
      <div className="col-lg-4">
        <div className="card mb-4">
          <div className="card-body text-center">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
              className="rounded-circle img-fluid" style={{width: "150px"}}/>
            <h5 className="my-3">{user.currentuser.name}</h5>
            <p className="text-muted mb-1">{user.currentuser.isadmin===true?"ADMIN PROFILE":"NOT A ADMIN"}</p>
            <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
            <div className="d-flex justify-content-center mb-2">
              <button type="button" className="btn btn-primary" onClick={onclick}>Log Out</button>
              <button type="button" className="btn btn-primary mx-4" onClick={Onadminwindow} style={{visibility:user.currentuser.isadmin===true?"visible":"hidden"}}>Admin Window</button>
            

      
              {/* <button type="button" className="btn btn-outline-primary ms-1">Message</button> */}
            </div>
          </div>
        </div>
        <div className="card mb-4 mb-lg-0">
          <div className="card-body p-0">
            <ul className="list-group list-group-flush rounded-3">
              <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                <i className="fa-solid fa-truck fa-xl"></i>
                <p className="mb-0">  <button className='btn btn-warning'>see current orders</button></p>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                
                <i class="fa-solid fa-clock-rotate-left fa-xl"  style={{color: "#333333"}}></i>
                <p className="mb-0"> <button className='btn btn-warning' onClick={onorder_req}> orders history </button></p>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center p-3">
              <div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={ontheme_change} style={{height:"25px",width:"43px"}} checked={theme.backcolor==="white"?false:true} />
  
</div>
<label className="mb-0" for="flexSwitchCheckDefault" >Dark mode</label>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                <i className="fab fa-instagram fa-lg" style={{color: "#ac2bac"}}></i>
                <p className="mb-0">mdbootstrap</p>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                <i className="fab fa-facebook-f fa-lg" style={{color: "#3b5998"}}></i>
                <p className="mb-0">mdbootstrap</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-lg-8">
        <div className="card mb-4">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Full Name</p>
              </div>
              <div className="col-sm-9 ">
                <p className="text-muted mb-0">{user.currentuser.name} <i className="fa-solid fa-pencil position-absolute end-0 " style={{cursor:"pointer"}} data-bs-toggle="modal" data-bs-target="#exampleModal" id="name"  onClick={onedit_profile}></i></p>
             
              </div>
            </div>
            <hr/>
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Email</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">{user.currentuser.email}  <i className="fa-solid fa-pencil position-absolute  end-0" style={{cursor:"pointer"}} data-bs-toggle="modal" data-bs-target="#exampleModal" id="email"  onClick={onedit_profile}></i></p>
                
              </div>
            </div>
            <hr/>
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Phone</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">{user.currentuser.phonenumber}<i className="fa-solid fa-pencil position-absolute end-0 "  id="phone number" style={{cursor:"pointer"}} data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={onedit_profile}></i></p>
              </div>
            </div>
            <hr/>
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Mobile</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">(098) 765-4321  <i className="fa-solid fa-pencil position-absolute  end-0" style={{cursor:"pointer"}} data-bs-toggle="modal" data-bs-target="#exampleModal"  ></i></p>
              </div>
            </div>
            <hr/>
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Address</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">Bay Area, San Francisco, CA  <i className="fa-solid fa-pencil position-absolute  end-0 " id="adress" style={{cursor:"pointer"}} data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={onedit_profile} ></i></p>
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  </div>
</section>
{/* <!-- Button trigger modal --> */}
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

{/* <!-- Modal --> */}
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog  modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div class="form-floating mb-3">
  <input type={editprofile=="email"?"email":"text"} class="form-control" id="floatingInput1" placeholder={editprofile}/>
  <label for="floatingInput">{editprofile}</label>
</div>
      <div class="form-floating mb-3">
  <input type="password" class="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label for="floatingInput">Enter profile password</label>
</div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
    </>
  )
}
