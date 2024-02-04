import React from 'react'
import img from "../wardrobe/assets/img/home-banner.jpg";
export default function Pic() {
  return (
    <div>
      <img src={img} className="img-fluid" alt="..." style={{height:"25rem",width:"100rem"}}></img>
    </div>
  )
}
