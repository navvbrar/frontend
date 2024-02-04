import React, { useState } from 'react';
import productcontext from './Productcontext';


const Productstate=(props)=> {
  
      let [allproducts,setallproducts]=useState([]);
    const [singleproduct,setsingleproduct]=useState([]);
    const [average_rating,setaverage_rating] = useState(null)
    const [user,setuser]=useState([]);
    const [cart,setcart]=useState([]);
    const [spinner,setspinner]=useState();
    const [loading,setloading]=useState();
    const [addid,setaddid]=useState();
    const [valid,setvalid]= useState({
      color:"",
      message:""
    });
    var [total,settotal]=useState()
    const[search,setsearch]=useState("");
    const[searchproduct,setsearchproduct]=useState([]);
    const[order,setorder]=useState([])
   
   
    const [allreviews,setallreviews]= useState([])
    const [storeproduct_id,setstoreproduct_id]=useState("")
    const [theme,settheme]=useState({
      backcolor:"white",
      textcolor:"blak"
    })
    
    const getproducts= async()=>{
      setspinner(true)
      // setloading(20)
   let product = await fetch("http://localhost:5000/api/product",{

   method:"GET",
   headers:{
    "content-type":"application/json",
    "auth-token":localStorage.getItem("token")

   }
    
   })
  //  setloading(60)
   let response = await product.json();
   if(response.success===true){

   
  //  setloading(80)
    setallproducts(response.products);
    
  //  setloading(100)
   setspinner(false)
    
   }
  
  

    }
   const productdetails = async (id)=>{
    setloading(30)
    setspinner(true)
    const details = await fetch(`http://localhost:5000/api/product/${id}`,{

    method:"GET",
    headers:{
     "content-type":"application/json",
     "auth-token":localStorage.getItem("token")
 
    }
     
    })
    setloading(60)
    const response = await details.json()
    if(response.success===true){
      setloading(80)
     setsingleproduct(response.products)
     setaverage_rating(response.average_rating)
     setloading(100)
     setspinner(false)
     return response.products

    }  


   }

   const getuser=async()=>{
    setloading(30)
    const userdetails = await fetch(`http://localhost:5000/api/account`,{

    method:"GET",
    headers:{
     "content-type":"application/json",
     "auth-token":localStorage.getItem("token")
 
    }
    
     
    })
    setloading(60)
    const response= await userdetails.json();
    if(response.success===true){
      setloading(80)
     setuser(response)
     setloading(100)
   console.log(setuser);
   

    }
    

   }
   const getcart=async()=>{
     
    // setloading(30)
    const getitems = await fetch(`http://localhost:5000/api/cart`,{

    method:"GET",
    headers:{
     "content-type":"application/json",
     "auth-token":localStorage.getItem("token")
 
    },
    
     
    })
    // setloading(60)
    
    const response= await getitems.json();
    
    if(response.success===true){
      // setloading(80)
     setcart(response)
     settotal(response.totalprice)
    //  setloading(100)
     }
     

   }


   const addtocart=async(product_id,quantity,size)=>{
     

    const addtocart = await fetch(`http://localhost:5000/api/cart`,{

    method:"POST",
    headers:{
    "content-type":"application/json",
     "auth-token":localStorage.getItem("token")
 
    },
    body: JSON.stringify({product_id,quantity,size})
    
     
    })
    const response =await addtocart.json()
    if(response.success===true){
       
   console.log("we are in if block")
    }
    


   }
   const deletecartitem=async(id)=>{
  
    const details = await fetch(`http://localhost:5000/api/cart/${id}`,{

    method:"DELETE",
    headers:{
     "content-type":"application/json",
     "auth-token":localStorage.getItem("token")
 
    }
     
    })
    const response=details.json()
    if(response.success===true){
    let remaings= cart.getItems.filter((product)=>{
      return product._id !==id
    })
    setcart(remaings)
    console.log("done")
    }

   }
   const updatecart=async(id,quantity)=>{
  
    const details = await fetch(`http://localhost:5000/api/cart/${id}`,{

    method:"PUT",
    headers:{
     "content-type":"application/json",
     "auth-token":localStorage.getItem("token")
 
    },
    body:JSON.stringify({quantity})
     
    })
    let response= details.json();
    if(response.success===true){
    settotal(response.totalprice)
   console.log(response.totalprice)
    }



   }

   const searchitem =async(endpoint,value)=>{
      setloading(30)
    
    const details = await fetch(`http://localhost:5000/api/search${endpoint}${value}`,{

    method:"GET",
    headers:{
     "content-type":"application/json",
     "auth-token":localStorage.getItem("token")
 
    }
     
    })
    setloading(60)
    const response= await details.json();
    if(response.success===true){
     setloading(80)
    setsearchproduct(response.search)
    setloading(100)
    }

   }
  const neworder =async(details)=>{
    setloading(30)
    const addorder = await fetch(`http://localhost:5000/api/order`,{

    method:"POST",
    headers:{
    "content-type":"application/json",
     "auth-token":localStorage.getItem("token")
 
    },
    body: JSON.stringify(details)
    
     
    })
    setloading(60)
    const response = await addorder.json()
    if(response.success===true){
      console.log(response)
      setloading(100)
    }


  }

const getorder=async()=>{
  const orders = await fetch(`http://localhost:5000/api/order`,{

    method:"GET",
    headers:{
    "content-type":"application/json",
     "auth-token":localStorage.getItem("token")
 
    }
    
     
    })
    const response = await orders.json()
    if(response.success===true){
   setorder(response.orders)
   
    }
}

const addproduct =async(info)=>{
  const addfetch= await fetch(`http://localhost:5000/api/product`,{
 method:"POST",
 headers:{
  "content-type":"application/json",
   "auth-token":localStorage.getItem("token")

  },
  body:JSON.stringify(info)

  })
}
const otp_req = async(email)=>{
  const password_reset= await fetch(`http://localhost:5000/api/account`,{
    method:"PUT",
    headers:{
     "content-type":"application/json",
      "auth-token":localStorage.getItem("token")
   
     },
     body:JSON.stringify({email:email})
   
     })

     const response = await password_reset.json()

     if(response.success === true){
   return true
     }
     else if(response.success === false){
      return false
     }
}
const otp_match = async(data)=>{
  const password_reset= await fetch(`http://localhost:5000/api/auth`,{
    method:"PUT",
    headers:{
     "content-type":"application/json",
      "auth-token":localStorage.getItem("token")
   
     },
     body:JSON.stringify(data)
   
     })
     const response = await password_reset.json()
     if(response.success === true){
       return true }
     if(response.success === false){
    return false
     }
    }
    const add_review= async(data)=>{
      
      const adding_review = await fetch(`http://localhost:5000/api/review`,{
        method:"POST",
        headers:{
         "content-type":"application/json",
          "auth-token":localStorage.getItem("token")
       
         },
         body:JSON.stringify(data)
              
         })
     const response = await adding_review.json();
     if (response.sucess === true){

      console.log("yehhh addedd")
     }

    }
  const getreviews=async(product_id)=>{
    const fetching_review = await fetch(`http://localhost:5000/api/review/${product_id}`,{
      method:"GET",
      headers:{
       "content-type":"application/json",
        "auth-token":localStorage.getItem("token")
     
       },
    
            
       })
       const response = await fetching_review.json()
       if(response.success === true){
        setallreviews(response.fetch_reviews)
        setaverage_rating(response.average_rating)
        console.log(allreviews)
       }



  }

  const addpromo = async(data)=>{
 const fetch_promo = await fetch("http://localhost:5000/api/promotion",{
 method:"POST",
 headers:{
  "content-type":"application/json"
 },
 body: JSON.stringify(data)



 })
 const response = await fetch_promo.json()
 if (response.success== true){
  settotal(response.netprice)
  return true
 }
 else{
  return false
 }

 
  }

  return (
    <productcontext.Provider value={{getproducts ,allproducts,singleproduct,productdetails,getuser,user,getcart,cart,spinner,setspinner,loading,setloading,addtocart,addid,setaddid,valid,setvalid,deletecartitem,updatecart,total,searchitem,search,setsearch,searchproduct,setsearchproduct,neworder,getorder,order,addproduct,otp_req,otp_match, add_review,getreviews,average_rating,allreviews,storeproduct_id,setstoreproduct_id,addpromo,theme,settheme}}>
        {props.children}
    </productcontext.Provider>
  )
}
export default Productstate;