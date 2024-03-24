import React,{useContext, useState} from 'react';
import productcontext from '../context/Productcontext';

export default function Cartitem(props) {
  const{deletecartitem,getcart,updatecart}= useContext(productcontext);
      const {item}=props;
      let[quantity,setquantity]= useState(item.quantity) 
      const [quantity_validation,setquantity_validation] = useState({
        message:""
      })
    
      const onplus=async()=>{
  let adding_quantity = quantity+1;
    const cart_response=  await updatecart(item._id,adding_quantity);
   
    if(cart_response===true){
  
      setquantity(quantity+1)
    }
    else{
      
     quantity_validation.message = " opps! No more stock";
     setTimeout(() => {
       setquantity_validation({
        message:""
       })
     }, 2000);
    }

      
      
       await getcart()
      }
      const onminus=async()=>{
        if(quantity>1){
        setquantity(quantity-1)
        await updatecart(item._id,quantity-1)
        await getcart()
      }}
      const ondelete=async()=>{
       await deletecartitem(item._id);
       await getcart();
      }      
  return (
    <>


        <div className="row my-3">
              <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">{console.log(item)}
                {/* <!-- Image --> */}
                <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                  <img src={item.product_id[0].image.url}
                    className="w-100" alt="Blue Jeans Jacket" />
                  <a href="#!">
                    <div className="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.2)"}}></div>
                  </a>
                </div>
                {/* <!-- Image --> */}
              </div>

               <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                 {/* <!-- Data --> * */}
                <p><strong>{item.name}</strong></p>
                <p>Color: blue</p>
                <p>Size:{item.size}</p>
                <button type="button" className="btn btn-primary btn-sm me-1 mb-2" data-mdb-toggle="tooltip"
                  title="Remove item">
                  <i className="fas fa-trash" onClick={ondelete}></i>
                </button>
                <button type="button" className="btn btn-danger btn-sm mb-2" data-mdb-toggle="tooltip"
                  title="Move to the wish list">
                  <i className="fas fa-heart"></i>
                </button>
                 {/* <!-- Data -->  */}
              </div> 

              <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                {/* <!-- Quantity --> */}
                <div className="d-flex mb-4" style={{maxWidth: "300px"}}>
                  <button className="btn btn-primary px-3 me-2" onClick={onminus}
                    >
                    <i className="fas fa-minus" onClick={onminus}></i>
                  </button>

                  <div className="form-outline">
                    <input id="form1" min="0" name="quantity"  type="number" className="form-control" value={quantity} />
                    <label className="form-label" for="form1">{item.stock}</label>
                  </div>

                  <button className="btn btn-primary px-3 ms-2"
                    onClick={onplus}>
                    <i className="fas fa-plus" onClick={onplus}></i>
                  </button>
                </div>
                {/* <!-- Quantity --> */}

                {/* <!-- Price --> */}
                <p className="text-start text-md-center">
                  <strong>total cost:${item.product_id[0].price * quantity}</strong>
                 
                </p>
                <div className='mx-4' style={{color:"red"}}>  {quantity_validation.message}</div>
               
                {/* <!-- Price --> */}
              </div>
            </div>
    </>
  )
}
