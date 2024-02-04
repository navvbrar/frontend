import React, { useContext } from 'react';
import img from "../wardrobe/assets/img/home-banner.jpg";
import StarRatings from 'react-star-ratings';
import {useNavigate} from "react-router-dom";
import productcontext from '../context/Productcontext';

export default function Productitem(props) {
  const navigation = useNavigate();
  const {productdetails,setaddid,getreviews,setstoreproduct_id} = useContext(productcontext)
  const {products} = props;
  const onclick= async ()=>{
    
   await productdetails(products._id)  
  await setaddid(products._id)   
   
  await getreviews(products._id)
   setstoreproduct_id(products._id)
   
  navigation("/details")
  }
  return (
    <>
   
<div className=" col-md-3" onClick={onclick}>
<div className="card mx-5 my-4" style={{width: "15rem",height:"25rem"}}>
  <img src={products.image.url} className="card-img-top" style={{height:"16rem"}} alt="..."/>
  <div className="card-body">
    <p className="card-text">{products.name}</p>
    <h6>${products.price}</h6>
    <StarRatings
    rating={products.rating}
    numberOfStars={5}
    starRatedColor="yellow"
    starDimension="18px"
        starSpacing="8px"
     >
</StarRatings>
  </div> 
</div>
</div>
    </>
  )
}
