import React from 'react'
import Link from 'next/link'

const OfferSection = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }
    // return(
    //     <section className="offer-area section-padding">
    //         <div className="container">
    //             <div className="row align-items-center">
    //                 <div className="col-lg-7">
    //                     <div className="offer-img">
    //                        <img src='/images/honey.png' alt="" />
    //                     </div>
    //                 </div>
    //                 <div className="col-lg-5">
    //                     <div className="offer-wrap">
    //                         <div className="offer-title">
    //                             <small>Terms & Conditions </small>
    //                             {/* <h2>Black  <span>Pepper Seeds Up</span> <br/> To 58% Off.</h2> */}
    //                         </div>
    //                         <p>Welcome to Hela Musu Products. These Terms and Conditions govern 
    //                             your use of our website and the purchase and sale of products from our 
    //                             platform. By accessing and using our website, you agree to comply with 
    //                             these terms. Please read them carefully before proceeding with any 
    //                             transactions 
    //                         </p>
    //                         <Link onClick={ClickHandler} href="/shop" className="btn theme-btn">Shop Now <i className="fa fa-angle-double-right"></i></Link>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </section>
    // )

    return (

        <section className="product-area section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-3">
                {/* <div className="section-title">
                  <h2>
                  Products Information <span>and Price</span>  
                  </h2>
                  <p>
                  The images and descriptions provided here are of actual items. 
                    Prices are subject to change without notice. 
                    <br />
                    
                  </p>
                </div> */}
              </div>
              <div className="col-lg-6 offset-lg-3">
                {/* <div className="section-title">
                  <h2>
                  Orders and <span>Payments</span>  
                  </h2>
                  <p>
                    You Agree to provide valid and up to date payment information and the 
                    total amount including taxes and shipping fees will be charged. 
                    The payment method is negotiable and is often a letter of credit or 
                    prepayment. 
                    <br />
                    
                  </p>
                </div> */}
              </div>
            </div>
             
          </div>
           
        </section>
      );
    };

export default OfferSection;