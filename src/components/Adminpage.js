import React, { useContext } from 'react'
import productcontext from '../context/Productcontext'
import { Link } from 'react-router-dom'

export default function Adminpage() {
    const{user} = useContext(productcontext)
  return (
    <>
      <div className=' text-center my-5 ' style={{backgroundColor:"grey"}}>
        <h2>welcome {user.currentuser.name}</h2>
        </div>
        <div className="card" style={{width: "18rem",margin:"100px"}}>
  <div className="card-body">
    <h5 className="card-title">Add product</h5>
    <Link to="/addproduct" className="btn btn-primary">Go somewhere</Link>
  </div>
</div>
      
    </>
  )
}
