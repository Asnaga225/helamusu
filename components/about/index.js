import React from 'react'
import Link from "next/link";
import VideoModal from '../ModalVideo'


const About = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }
    return(
        <section className="about-section section-padding p-t-0">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col col-lg-5 col-12">
                        <div className="video-area">
                            <img src='/images/abou2.jpg' alt="" />
                            <div className="video-holder">
                                <VideoModal/>
                            </div>
                        </div>
                    </div>
                    <div className="col col-lg-7 col-12">
                        <div className="about-area">
                            <div className="about-wrap">
                                <div className="about-title">
                                    <small>About our Company</small>
                                    {/* <h2>All in one <span>to make a</span> different structure</h2> */}
                                </div>
                                <p>We are spices Export company which established in sri lanka.We mainly export spices all over the world
                                like Black pepper, cloves, Turmeric-Powder etc.</p>
                                {/* <Link onClick={ClickHandler} href="/about" className="btn theme-btn">More About<i className="fa fa-angle-double-right"></i></Link> */}
                            </div>
                        </div>
                    </div>
                    <div className="col col-lg-7 col-12">
                        <div className="about-area">
                            <div className="about-wrap">
                                <div className="about-title">
                                    <small>Our Vision</small>
                                </div>
                                <p>To become the best spices export company in Sri lanka by providing high quality, safe and healthy spices
                                free from artificial flavors.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;