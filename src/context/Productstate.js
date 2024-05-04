import React, { useState } from 'react';
import productcontext from './Productcontext';
import { loadStripe } from '@stripe/stripe-js';


const Productstate=(props)=> {
  let API_URL = `https://ecommerce-backend3-i4yr.onrender.com`
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

    let [details, setdetails] = useState({
      firstname: "",
      lastname: "",
      email: "",
      phonenumber: "",
      addressline: "",
      city: "",
      state: "",
      country: "",
      zipcode: "",
      totalprice:0
    });
    
    const getproducts= async()=>{
      setspinner(true)
      // setloading(20)
   let product = await fetch(`${API_URL}/api/product`,{

   method:"GET",
   headers:{
    "content-type":"application/json",
    "auth-token":localStorage.getItem("token")

   }
    
   })
  
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
    const details = await fetch(`${API_URL}/api/product/${id}`,{

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
    const userdetails = await fetch(`${API_URL}/api/account`,{

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
    const getitems = await fetch(`${API_URL}/api/cart`,{

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
     

    const addtocart = await fetch(`${API_URL}/api/cart`,{

    method:"POST",
    headers:{
    "content-type":"application/json",
     "auth-token":localStorage.getItem("token")
 
    },
    body: JSON.stringify({product_id,quantity,size})
    
     
    })
    const response =await addtocart.json()
    if(response.success===true){
        return true
  
    }
    else{
      return false
    }
    


   }
   const deletecartitem=async(id)=>{
  
    const details = await fetch(`${API_URL}/api/cart/${id}`,{

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
  
    const details = await fetch(`${API_URL}/api/cart/${id}`,{

    method:"PUT",
    headers:{
     "content-type":"application/json",
     "auth-token":localStorage.getItem("token")
 
    },
    body:JSON.stringify({quantity})
     
    })
    let response= await details.json();
    if(response.success===true){
    settotal(response.totalprice)
       return true
    }
    else{
      return false
    }



   }

   const searchitem =async(endpoint,value)=>{
      setloading(30)
    
    const details = await fetch(`${API_URL}/api/search${endpoint}${value}`,{

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
    const addorder = await fetch(`${API_URL}/api/order`,{

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
    
      setloading(100)
      settotal(response.end_total)
      return response.end_total

    }


  }

const getorder=async()=>{
  const orders = await fetch(`${API_URL}/api/order`,{

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
  const addfetch= await fetch(`${API_URL}/api/product`,{
 method:"POST",
 headers:{
  "content-type":"application/json",
   "auth-token":localStorage.getItem("token")

  },
  body:JSON.stringify(info)

  })
}
const otp_req = async(email)=>{
  const password_reset= await fetch(`${API_URL}/api/account`,{
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
  const password_reset= await fetch(`${API_URL}/api/auth`,{
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
      
      const adding_review = await fetch(`${API_URL}/api/review`,{
        method:"POST",
        headers:{
         "content-type":"application/json",
          "auth-token":localStorage.getItem("token")
       
         },
         body:JSON.stringify(data)
              
         })
     const response = await adding_review.json();
     if (response.sucess === true){

       
     }

    }
  const getreviews=async(product_id)=>{
    const fetching_review = await fetch(`${API_URL}/api/review/${product_id}`,{
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
        
       }



  }

  const addpromo = async(data)=>{
 const fetch_promo = await fetch(`${API_URL}/api/promotion`,{
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

  const payment_stripe=async(data)=>{
    const stripe = 
    await loadStripe("pk_test_51P9qNQRoymbVDp1jYesh09RFXuSFqzK5i2gFonP98I6TwC2rEeNZmv0tCYlRESCEPOEOy9DjUxIEB7Q5nJCIo6qt00fsk05PEA");
 const new_payemnt  = await fetch(`${API_URL}/api/session`,{
  method:"POST",
  headers:{
    "content-type":"application/json"
  },
  body:JSON.stringify({getitems:data})
 }
 
)
const response = await new_payemnt.json();

  const end = await stripe.redirectToCheckout({
  sessionId:response.id
 })
 
    
}

  return (
    <productcontext.Provider value={{getproducts ,allproducts,singleproduct,productdetails,getuser,user,getcart,cart,spinner,setspinner,loading,setloading,addtocart,addid,setaddid,valid,setvalid,deletecartitem,updatecart,total,searchitem,search,setsearch,searchproduct,setsearchproduct,neworder,getorder,order,addproduct,otp_req,otp_match, add_review,getreviews,average_rating,allreviews,storeproduct_id,setstoreproduct_id,addpromo,theme,settheme,payment_stripe,details,setdetails}}>
        {props.children}
    </productcontext.Provider>
  )
}
export default Productstate;