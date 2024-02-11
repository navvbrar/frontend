import React, { useContext, useEffect } from 'react'
import img from "../wardrobe/assets/img/boy/formals.jpg";
import img1 from "../wardrobe/assets/img/boy/athestic-wear.jpg";
import img2 from "../wardrobe/assets/img/boy/sweaters.jpg";
import img3 from "../wardrobe/assets/img/boy/winter-wears.jpg";
import img4 from "../wardrobe/assets/img/boy/waist-coats.jpg";
import img5 from "../tshirts.jpg";
import gimg1 from "../wardrobe/assets/img/girls/dresses.jpg";
import gimg2 from "../wardrobe/assets/img/girls/hoodies.jpg";
import gimg3 from "../wardrobe/assets/img/girls/jump-suits.jpg";
import gimg4 from "../wardrobe/assets/img/girls/long-frock.jpg";
import gimg5 from "../wardrobe/assets/img/girls/rompers.jpg";
import gimg6 from "../wardrobe/assets/img/girls/ruffle-frocks.jpg";

import Pic from './Pic';
import productcontext from '../context/Productcontext';
import {Link,useSearchParams,useNavigate} from "react-router-dom";
export default function Home2() {
    const{getproducts,allproducts,setspinner,searchitem,theme}=useContext(productcontext)
    const [parameter] = useSearchParams();
    const navigation = useNavigate();
    useEffect(()=>{
        if(localStorage.getItem("token")){
          getproducts();
          }
        else{
  navigation("/loginsignup")
        }
     },[])

    
  return (
    <>
       <Pic/>
    {allproducts.length===0?setspinner(true):
      <main style={{backgroundColor:theme.backcolor}}>
        <section className="home-page my-4">
          <div className="container">
            <div className="container-inner">
              <div className="collage-main">
                <h1>MEN CLOTHING</h1>
                <p>Explore the men store here!</p>
                <div className="parent-row justify-content-between collage home-collage-1">
                  <div className="collage-container-2 width-7-5 parent-row justify-content-between">
                    <div className="collage-inner collage-3">
                    <Link to={`/search?category=mobile`}> 
                        <div
                          className="collage-3-bg collage-bg"
                          style={{
                            backgroundImage: `url(${img5})`,
                          }}
                        >
                          <div className="collage-inner-shaddow">
                            <div className="collage-inner-text">T-SHIRTS</div>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="collage-inner collage-4" >
                     <Link to={`/search?category=athestic-wear`}> 
                        <div
                          className="collage-4-bg collage-bg"
                          style={{
                            backgroundImage:`url(${img1})`,
                          }}
                        >
                          <div className="collage-inner-shaddow">
                            <div className="collage-inner-text">
                              ATHESTIC WEAR
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="collage-inner collage-5">
                      <Link to={`/search?category=winter-wear`}>
                        <div
                          className="collage-5-bg collage-bg"
                          style={{
                            backgroundImage:
                            `url(${img3})`,
                          }}
                        >
                          <div className="collage-inner-shaddow">
                            <div className="collage-inner-text">
                              WINTER WEAR
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="collage-inner collage-6">
                      <Link to={`/search?category=sweaters`}>
                        <div
                          className="collage-6-bg collage-bg"
                          style={{
                            backgroundImage: `url(${img2})`,
                          }}
                        >
                          <div className="collage-inner-shaddow">
                            <div className="collage-inner-text">SWEATERS</div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="collage-container-1 width-2-5">
                    <div className="collage-inner collage-1">
                      <Link to={`/search?category=formal-wear`}>
                        <div
                          className="collage-1-bg collage-bg"
                          style={{
                            backgroundImage: `url(${img})`,
                          }}
                        >
                          <div className="collage-inner-shaddow">
                            <div className="collage-inner-text">
                              FORMAL WEAR
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="collage-inner collage-2">
                      <Link to={`/search?category=waist-coats`}>
                        <div
                          className="collage-2-bg collage-bg"
                          style={{
                            backgroundImage:
                            `url(${img4})`,
                          }}
                        >
                          <div className="collage-inner-shaddow">
                            <div className="collage-inner-text">
                              WAIST COATS
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="home-products">
                <h1>RECOMMENDED FOR YOU</h1>
                {/* <ProductGrid params={{ product_ids: contants.recomended }} /> */}
              </div>
              <div className="collage-main">
                <h1>Women Clothing</h1>
                <p>Explore the Women store here!</p>
                <div className="parent-row justify-content-between collage home-collage-1">
                  <div className="collage-container-1 width-2-5">
                    <div className="collage-inner collage-1">
                      <Link to={`/search?category=traditional-suits`}>
                        <div
                          className="collage-1-bg collage-bg"
                          style={{
                            backgroundImage:
                              `url(${gimg1})`,
                          }}
                        >
                          <div className="collage-inner-shaddow">
                            <div className="collage-inner-text">
                              TRADITIONAL SUITS
                            </div>
                          </div>
                        </div>
                     </Link> 
                    </div>
                    <div className="collage-inner collage-2">
                      <Link to={`/search?category=bell-bottom`}>
                        <div
                          className="collage-2-bg collage-bg"
                          style={{
                            backgroundImage:
                            `url(${gimg2})`,
                          }}
                        >
                          <div className="collage-inner-shaddow">
                            <div className="collage-inner-text">
                              BELL-BOTTOM
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="collage-container-2 width-7-5 parent-row justify-content-between">
                    <div className="collage-inner collage-3">
                      <Link to={`/search?category=jeans`}>
                        <div
                          className="collage-3-bg collage-bg"
                          style={{
                            backgroundImage:
                            `url(${gimg6})`,
                          }}
                        >
                          <div className="collage-inner-shaddow">
                            <div className="collage-inner-text">
                              JEAN AND TSHIRTS
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="collage-inner collage-4">
                      <Link to={`/search?category=women-tshirts`}>
                        <div
                          className="collage-4-bg collage-bg"
                          style={{
                            backgroundImage:
                            `url(${gimg5})`,
                          }}
                        >
                          <div className="collage-inner-shaddow">
                            <div className="collage-inner-text">T-SHIRTS</div>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="collage-inner collage-5">
                      <Link to={`/search?category=frocks`}>
                        <div
                          className="collage-5-bg collage-bg"
                          style={{
                            backgroundImage:
                            `url(${gimg3})`,
                          }}
                        >
                          <div className="collage-inner-shaddow">
                            <div className="collage-inner-text">FROCKS</div>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="collage-inner collage-6">
                      <Link to={`/search?category=long-frocks`}>
                        <div
                          className="collage-6-bg collage-bg"
                          style={{
                            backgroundImage:
                            `url(${gimg4})`,
                          }}
                        >
                          <div className="collage-inner-shaddow">
                            <div className="collage-inner-text">
                              LONG FROCKS
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
  }
    </>
  )
}
