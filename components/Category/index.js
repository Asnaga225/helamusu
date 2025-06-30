import React from 'react'
import Link from 'next/link'


const Category = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }
    return(
        <section className="category-area section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="category-wrap">
                            <div className="category-title">
                                <h2>Welcome To
                                Hela Musu Products,</h2>
                                <p>You have come to the right place to fulfill your spices needs. We are ready to provide you with the finest
                                spices in the world. We are exporting Ceylon spices all over the world.</p>
                            </div>
                            <div className="category-item">
                                <div className="category-icon">
                                    <img src='/images/category/icon-1.png' alt="" />
                                </div>
                                <div className="category-content">
                                    <h2><Link onClick={ClickHandler} href="/shop">Ceylon Turmeric-Powder</Link></h2>
                                    <p>Tumeric is known especially for its strong aroma and color.It is mainly used as a spice to flavor and color
                                    the foods.</p>
                                </div>
                            </div>
                            <div className="category-item">
                                <div className="category-icon">
                                    <img src='/images/category/icon-2.png' alt="" />
                                </div>
                                <div className="category-content">
                                    <h2><Link onClick={ClickHandler} href="/shop">Ceylon Black Pepper Seeds</Link></h2>
                                    <p>Ceylon black pepper seeds are aromatic, pungent spices known for their bold flavor. They enhance culinary dishes and offer medicinal properties with antioxidant and digestive benefits.</p>
                                </div>
                            </div>
                            <div className="category-item">
                                <div className="category-icon">
                                    <img src='/images/category/icon-3.png' alt="" />
                                </div>
                                <div className="category-content">
                                    <h2><Link onClick={ClickHandler} href="/shop">Ceylon Black Pepper Powder</Link></h2>
                                    <p>Black pepper is used mainly to add pungency and aroma to meat, fish and vegetables. Ceylon black
                                    pepper is rich in piperine.</p>
                                </div>
                            </div>
                            <div className="category-item">
                                <div className="category-icon">
                                    <img src='/images/category/icon-5.png' alt="" />
                                </div>
                                <div className="category-content">
                                    <h2><Link onClick={ClickHandler} href="/shop">Ceylon Whole Cloves</Link></h2>
                                    <p>Clove is a spice made from dried flower buds, commonly used whole or ground to add rich flavor and aroma to a variety of foods and dishes.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="category-img">
                            <img src='/images/category/category.jpg' alt="" />
                            <div className="ct-img"><img src='/images/category/icon-4.png' alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Category;