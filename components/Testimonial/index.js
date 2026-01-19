import React from "react";
import Slider from "react-slick";




const Testimonials = [
    {
        tstImg: '/images/testimonial/1.png',
        name: 'Rachel Matthews',
        sub: 'CEO, Deixfes',
        descriptoion: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industrys standard dummy text ever since the 1500s unknown printer took a galley of type and scrambled it to make a type specimen book has survived not has been the industrys standard consectetur adipisicing elit only five centuries the industrys standard consectetur.',
    },
    {
        tstImg: '/images/testimonial/2.png',
        name: 'Jenefer Marvella',
        sub: 'CEO, TBR',
        descriptoion: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industrys standard dummy text ever since the 1500s unknown printer took a galley of type and scrambled it to make a type specimen book has survived not has been the industrys standard consectetur adipisicing elit only five centuries the industrys standard consectetur.',
    },
    {
        tstImg: '/images/testimonial/3.png',
        name: 'Ken Williamson',
        sub: 'CEO, Bexim',
        descriptoion: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industrys standard dummy text ever since the 1500s unknown printer took a galley of type and scrambled it to make a type specimen book has survived not has been the industrys standard consectetur adipisicing elit only five centuries the industrys standard consectetur.',
    },
]



const Testimonial = () => {
    var settings = {
        dots: false,
        arrows: true,
        speed: 1200,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        fade: true
    };

    return (
        <section className="testimonial-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <div className="section-title">
                            <h2>Terms &<span> Conditions</span></h2>
                            <p>Welcome to Hela Musu Products. These Terms and Conditions govern 
                                your use of our website and the purchase and sale of products from our 
                                platform. By accessing and using our website, you agree to comply with 
                                these terms. Please read them carefully before proceeding with any 
                                transactions.
                            </p>
                        </div>
                        <div className="section-title">
                            <h3>
                            Products Information <span>and Price</span>  
                            </h3>
                            <p>
                            The images and descriptions provided here are of actual items. 
                                Prices are subject to change without notice. 
                                <br />
                                
                            </p>
                        </div>
                        <div className="section-title">
                            <h3>Orders and <span>Payments</span>  
                            </h3>
                            <p>
                                You Agree to provide valid and up to date payment information and the 
                                total amount including taxes and shipping fees will be charged. 
                                The payment method is negotiable and is often a letter of credit or 
                                prepayment. 
                                <br />
                                
                            </p>
                        </div>
                        <div className="section-title">
                            <h3>Delivery<span></span></h3>
                            <p>  
                            We are responsible for delivering your order quickly and safely. 
                            </p>
                        </div>
                    </div>
                </div>
                {/* <div className="testimonial-wrap">
                    <div className="testimonial-active">
                        <Slider {...settings}>
                            {Testimonials.map((tstml, tsm) => (
                                <div className="testimonial-item" key={tsm}>
                                    <div className="testimonial-img">
                                        <img src={tstml.tstImg} alt="" />
                                        <div className="t-quote">
                                            <i className="fi flaticon-left-quote"></i>
                                        </div>
                                    </div>
                                    <div className="testimonial-content">
                                        <p>{tstml.descriptoion}</p>
                                        <div className="testimonial-author">
                                            <h3>{tstml.name}</h3>
                                            <span>{tstml.sub}</span>
                                        </div>
                                        <div className="t-content-quote">
                                            <i className="fi flaticon-left-quote"></i>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div> */}
            </div>
        </section>
    )
}

export default Testimonial;