import React, { useContext, useState } from "react";
import productcontext from "../context/Productcontext";
import StarRatings from "react-star-ratings";
import Navbar from "./Navbar";
import Reviewitem from "./Reviewitem";
const { Link } = require("react-router-dom");




export default function Productdetails() {
  const { singleproduct, addid, addtocart, add_review, allreviews, average_rating, storeproduct_id, getreviews } = useContext(productcontext);
  const [size, setsize] = useState()
  const [quantity, setquantity] = useState(1)
  const [nullsize, setnullsize] = useState()
  const [inputsize, setinputsize] = useState(null)
  const [lengthvalue, setlengthvalue] = useState({ value: null, message: "", color: "" })
  const [review_credentials, setreview_credentials] = useState({  comment: "", rating: null, product_id: "" })
  const [review_response, setreview_response] = useState({ message: "", color: "" })

  const onreview_change = (e) => {
    setreview_credentials({
      ...review_credentials, [e.target.name]: e.target.value
    })



  }
  const addreview = async () => {
    review_credentials.product_id = singleproduct._id
    await add_review(review_credentials)


  }

  const onclick = async () => {
    if (size == null) {
      setnullsize("please select a size ")
      setTimeout(() => {
        setnullsize(null)
      }, 1500);
    }
    else {
      await addtocart(addid, quantity, size)
      setinputsize("item added to cart")
      setTimeout(() => {
        setinputsize(null)
      }, 1500);
    }


  }



  const onchange = (e) => {
    //  e.preventDefault();
    setsize(
      e.target.value
    )


  }
  // this function controls input of rating (out of 5)entered by user in reviews.
  const set_rating_length = (e) => {
    var { value, maxLength } = e.target;

    const fix_length = value.slice(0, maxLength)

    if (fix_length > 5) {
      setlengthvalue({
        message: "please enter a value out of 5",
        value: 0,
        color: "red"
      })
      setTimeout(() => {
        setlengthvalue({
          message: null,
          value: null,
          color: null
        })
      }, 1000);
    }
    else {
      setlengthvalue({
        value: fix_length,
        color: "green"
      })
    }

  }
  // this function increses the quantity of items 
  const onplus = () => {

    setquantity(quantity + 1)

  }
  // this function decreses the quantity of items 
  const onminus = () => {
    if (quantity > 1) {
      setquantity(quantity - 1)
    }
  }
  return (

    <>
      <Navbar />
      <main id="main">
        <section className="breadcrumbs">
          <div className="container">
            <ol>
              <li>
                <img src="assets/img/home.png" alt="home" />
              </li>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>Product</li>
            </ol>
          </div>
        </section>

        <section className="product-detail">
          <div className="container">
            <div className="parent-row main-description justify-content-between">
              <div div className="width-5 parent-row product-images">
                <div className="parent-row">
                  <div className="image-container">
                    <img
                      id="main-1"
                      src={singleproduct.image.url}
                      alt="product"
                      width="100%"
                    />
                  </div>
                  <div className="image-container">
                    <img
                      id="main-2"
                      src={singleproduct.image.url}
                      alt="product"
                      width="100%"
                    />
                  </div>
                </div>
                <div className="parent-row">
                  <div className="image-container">
                    <img
                      id="main-3"
                      src={singleproduct.image.url}
                      alt="product"
                      width="100%"
                    />
                  </div>
                  <div className="image-container">
                    <img
                      id="main-4"
                      src={singleproduct.image.url}
                      alt="product"
                      width="100%"
                    />
                  </div>
                </div>
                <h3 className="container ">{singleproduct.name}</h3>
                <p>{singleproduct.description}</p>
                <div className="container">
                  <div className="sizes mt-5" >
                    <h6 className={`text-uppercase`} >Size</h6> <label className={`radio ${singleproduct.size.S === false ? "crossed" : null}`}> <input type="radio" name="size" id="size1" value="S" onChange={onchange} disabled={singleproduct.size.S === false} /> <span>S</span> </label> <label className="radio"> <input type="radio" name="size" id="size2" value="M" onChange={onchange} disabled={singleproduct.size.M === false} /> <span>M</span> </label> <label className="radio"> <input type="radio" name="size" id="size3" value="L" onChange={onchange} disabled={singleproduct.size.L === false} /> <span>L</span> </label> <label className="radio"> <input type="radio" name="size" id="size4" value="XL" onChange={onchange} disabled={singleproduct.size.XL === false} /> <span>XL</span> </label> <label className="radio"> <input type="radio" name="size" value="XXL" id="size5" onChange={onchange} disabled={singleproduct.size.XXL === false} /> <span>XXL</span> </label>
                    <br />

                    <div><strong style={{ color: "red" }}>{nullsize}</strong></div>
                  </div>

                </div>


              </div>

              <div className="description-container width-4-5">
                <h1 id="product-title"></h1>
                <h2 id="product-brand" className="seller"></h2>
                <div className="rating-container">
                  <div className="rating">
                    <div className="rating-inner">
                      {average_rating === null ? 0 : average_rating.toFixed(1)}
                      <StarRatings
                        rating={average_rating === null ? 0 : average_rating}
                        numberOfStars={5} 
                        starRatedColor="yellow"
                        starDimension="18px"
                        starSpacing="8px"
                      ></StarRatings>
                      <span className="index-separator">|</span>
                      {/* <span>210 ratings</span> */}
                    </div>
                  </div>
                </div>
                <div className="price-section">
                  <p className="pice-inner">
                    <span className="price">
                      <strong id="after-discount-price"></strong>
                    </span>
                    <span id="discount-section">
                      <span className="mrp">
                        <del id="mrp"></del>
                      </span>
                      <span className="discount">
                        (<span id="discount"></span>% off)
                      </span>
                    </span>
                  </p>
                  <p className="tax">Inclusive of all taxes</p>
                </div>

                <div className="col-md-4 col-6 mb-3 my-3">
                  <label className="mb-2 d-block">Quantity</label>
                  <div className="input-group mb-3" style={{ width: "170px" }}>
                    <button className="btn btn-white border border-secondary px-3" type="button" id="button-addon1" data-mdb-ripple-color="dark" onClick={onminus}>
                      <i className="fas fa-minus"></i>
                    </button>
                    <input type="text" className="form-control text-center border border-secondary" placeholder={quantity} value={quantity} aria-label="Example text with button addon" aria-describedby="button-addon1" />
                    <button className="btn btn-white border border-secondary px-3" type="button" id="button-addon2" data-mdb-ripple-color="dark" onClick={onplus}>
                      <i className="fas fa-plus" onClick={onplus}></i>
                    </button>
                  </div>
                </div>

                <div className="add-to-cart-section parent-row">


                  <a className="add-to-cart-btn btn" id="add-to-cart" onClick={onclick}>
                    {inputsize === null ? "Add to cart" : "added to cart"}  </a>


                </div>
                {/* <div><strong style={{color:"green"}}>{inputsize}</strong></div>  */}

                <div className="delivery-options-parent ">
                  <h2 className="delivery-options ">Delivery options</h2>
                  <div className="check-pincode-parent ">
                    <input
                      type="text"
                      className="input-form check-pin"
                      name="pincode"
                      placeholder="Enter pin code"
                    />
                    <div className="check-pincode-text">Check</div>
                  </div>
                  <ul>
                    <li>Pay on delivery available</li>
                    <li>Credit and debit cards also acceptable</li>
                    <li>Easy 30 days return and exchange policy</li>
                  </ul>
                </div>
                <div className="parent-row justify-content-space-evenly">
                  <div className="width-4 product-detail-row f-flex justify-content-between">
                    <p className="product-detail-key">Fabric</p>
                    <p className="product-detail-value">Cotton</p>
                  </div>
                  <div className="width-4 product-detail-row f-flex justify-content-between">
                    <p className="product-detail-key">Fit</p>
                    <p className="product-detail-value">Slim Fit</p>
                  </div>
                  <div className="width-4 product-detail-row f-flex justify-content-between">
                    <p className="product-detail-key">Length</p>
                    <p className="product-detail-value">Regular</p>
                  </div>
                  <div className="width-4 product-detail-row f-flex justify-content-between">
                    <p className="product-detail-key">Main Trend</p>
                    <p className="product-detail-value">Colourblocked</p>
                  </div>
                  <div className="width-4 product-detail-row f-flex justify-content-between">
                    <p className="product-detail-key">Multipack Set</p>
                    <p className="product-detail-value">Single</p>
                  </div>
                  <div className="width-4 product-detail-row f-flex justify-content-between">
                    <p className="product-detail-key">Neck</p>
                    <p className="product-detail-value">Round Neck</p>
                  </div>
                  <div className="width-4 product-detail-row f-flex justify-content-between">
                    <p className="product-detail-key">Pattern</p>
                    <p className="product-detail-value">Colourblocked</p>
                  </div>
                  <div className="width-4 product-detail-row f-flex justify-content-between">
                    <p className="product-detail-key">Pattern Coverage</p>
                    <p className="product-detail-value">Chest</p>
                  </div>
                </div>
              </div>

            </div>
            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"> Drop a review <i class="fa-solid fa-circle-plus fa-xl" data-bs-toggle="modal" data-bs-target="#exampleModal"></i></button>
            {/* Modal */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Drop a review</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    {/* <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label">name</label>
                      <input type="text" class="form-control" id="exampleFormControlInput1" name="name" onChange={onreview_change} placeholder="name@example.com" />
                    </div> */}
                    <div class="mb-3">
                      <label for="exampleFormControlTextarea1" class="form-label">comments</label>
                      <textarea class="form-control" id="exampleFormControlTextarea1" name="comment" onChange={onreview_change} rows="3"></textarea>
                    </div>
                    <div class="mb-3">
                     
                      <form class="ratingx">
                        <label>
                          <input type="radio" name="rating" onChange={onreview_change} value="1" />
                          <span class="icon">★</span>
                        </label>
                        <label>
                          <input type="radio" name="rating" onChange={onreview_change} value="2" />
                          <span class="icon">★</span>
                          <span class="icon">★</span>
                        </label>
                        <label>
                          <input type="radio" name="rating" onChange={onreview_change} value="3" />
                          <span class="icon">★</span>
                          <span class="icon">★</span>
                          <span class="icon">★</span>
                        </label>
                        <label>
                          <input type="radio" name="rating" onChange={onreview_change} value="4" />
                          <span class="icon">★</span>
                          <span class="icon">★</span>
                          <span class="icon">★</span>
                          <span class="icon">★</span>
                        </label>
                        <label>
                          <input type="radio" name="rating" onChange={onreview_change} value="5" />
                          <span class="icon">★</span>
                          <span class="icon">★</span>
                          <span class="icon">★</span>
                          <span class="icon">★</span>
                          <span class="icon">★</span>
                        </label>
                      </form>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={async() => { await addreview(); getreviews(storeproduct_id) }}>Save changes</button>
                  </div>
                </div>
              </div>
            </div>
            <hr></hr>
            <h4> <i>Product Reviews </i></h4>
            <div className="container row my-3 mx-4 ">
              <div>{allreviews.length === 0 ? "no reviews yet" : ""}</div>
              {
                allreviews.map((review) => {
                  return <Reviewitem key={review._id} review={review} />
                })
              }
            </div>
            <div className="similar-products">
              <h1>SIMILAR PRODUCTS</h1>
              <div className="parent-row product-grid" id="product-grid"></div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
