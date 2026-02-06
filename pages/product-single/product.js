import React, { useState } from "react";
import Zoom from 'react-medium-image-zoom'
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import 'react-medium-image-zoom/dist/styles.css'
import Link from 'next/link'

const Product = ({ item, addToCart }) => {

  const [qty, setQty] = useState(1);
  
//  
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = item.images && item.images.length > 0 ? item.images : [item.proImg];

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };
  // ------------------------------------------

  return (

    <div className="product-details">
      <div className="row align-items-center">
        <div className="col-lg-5">
          <div className="product-single-img" style={{ position: 'relative' }}> {/* Style එකක් එකතු කළා button position කරන්න */}
            <div className="product-active">
              
              <div className="item">
                <Zoom>
                  <img
                    alt={item.title}
                    src={images[currentIndex]} // Current index එකේ image එක පෙන්වයි
                    width="500"
                    style={{ width: '100%', display: 'block' }}
                  />
                </Zoom>
              </div>

              {/* --- < > Buttons   --- */}
              {images.length > 1 && (
                <>
                  <button 
                    onClick={prevImage}
                    style={{
                      position: 'absolute', top: '50%', left: '0', transform: 'translateY(-50%)',
                      background: 'rgba(0,0,0,0.2)', color: 'white', border: 'none', 
                      padding: '10px 15px', cursor: 'pointer', zIndex: '10', fontSize: '20px'
                    }}
                  >
                    ❮
                  </button>
                  <button 
                    onClick={nextImage}
                    style={{
                      position: 'absolute', top: '50%', right: '0', transform: 'translateY(-50%)',
                      background: 'rgba(0,0,0,0.2)', color: 'white', border: 'none', 
                      padding: '10px 15px', cursor: 'pointer', zIndex: '10', fontSize: '20px'
                    }}
                  >
                    ❯
                  </button>
                </>
              )}
              {/* ---------------------------- */}

            </div>
          </div>
        </div>
        <div className="col-lg-7">
          <div className="product-single-content">
            <h5>{item.title}</h5>
            <p>{item.price}</p>
            <ul className="rating">
              <li>
                <i className="fa fa-star" aria-hidden="true"></i>
              </li>
              <li>
                <i className="fa fa-star" aria-hidden="true"></i>
              </li>
              <li>
                <i className="fa fa-star" aria-hidden="true"></i>
              </li>
              <li>
                <i className="fa fa-star" aria-hidden="true"></i>
              </li>
              <li>
                <i className="fa fa-star" aria-hidden="true"></i>
              </li>
            </ul>
            {/* <p>${item.price}</p> */}
            <div className="product-filter-item color">
              {/* <div className="color-name">
                <span>Color :</span>
                <ul>
                  <li className="color1">
                    <input id="a1" type="radio" name="color" value="30" />
                    <label htmlFor="a1"></label>
                  </li>
                  <li className="color2">
                    <input id="a2" type="radio" name="color" value="30" />
                    <label htmlFor="a2"></label>
                  </li>
                  <li className="color3">
                    <input id="a3" type="radio" name="color" value="30" />
                    <label htmlFor="a3"></label>
                  </li>
                </ul>
              </div> */}
            </div>
            <div className="product-filter-item color filter-size">
              <div className="color-name">
                <span>Weight :</span>
                <ul>
                  <li className="color">
                    <input id="wa1" type="radio" name="size" value="30" />
                    <label htmlFor="wa1">50g</label>
                  </li>
                  <li className="color">
                    <input id="wa2" type="radio" name="size" value="30" />
                    <label htmlFor="wa2">100g</label>
                  </li>
                  {/* <li className="color">
                    <input id="wa3" type="radio" name="size" value="30" />
                    <label htmlFor="wa3">250g</label>
                  </li>
                  <li className="color">
                    <input id="wa4" type="radio" name="size" value="30" />
                    <label htmlFor="wa4">500g</label>
                  </li> */}
                </ul>
              </div>
            </div>
            <div className="pro-single-btn">
              <Grid className="quantity cart-plus-minus">
                {/* <Button
                  className="dec qtybutton"
                  onClick={() => setQty(qty <= 1 ? 1 : qty - 1)}
                >
                  -
                </Button> */}
                {/* <input
                  value={qty}
                  onChange={() => setQty(qty)}
                  type="text"
                />
                <Button
                  className="inc qtybutton"
                  onClick={() => setQty(qty + 1)}
                >
                  +
                </Button> */}
              </Grid>
              {/* <button
                className="theme-btn"
                onClick={() => addToCart(item, qty)}
              >
                Add to cart
              </button> */}
            </div>
            <div className="social-share">
              <span>Share with : </span>
              <ul className="socialLinks">
                <li>
                  <Link href="/">
                    <i className="fa fa-facebook"></i>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <i className="fa fa-whatsapp"></i>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <i className="fa fa-envelope"></i>
                  </Link>
                </li>
                {/* <li>
                  <Link href="/">
                    <i className="fa fa-instagram"></i>
                  </Link>
                </li> */}
                {/* <li>
                  <Link href="/">
                    <i className="fa fa-youtube-play"></i>
                  </Link>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;