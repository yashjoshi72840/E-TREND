import React from "react";
import New_props from "./New_props";




const New = () => {
    return (
        <>
            <div class="featured-outer">
                <div class="container">
                    <div class="title">
                        <h2>New <i>Products</i></h2>
                    </div>
                    <div class="featured-inner">
                        <div class="featured-item">
                            {/* <div class="featured-item-inner">
                                <div class="featured-img">
                                    <img src="assats/image/accusantium-dolore2.jpg" alt="accusantium-dolore" />
                                    <div class="hover-img">
                                        <img src="assats/image/accusantium-dolore3.jpg" alt="" />
                                    </div>
                                    <div class="featured-text1">
                                        <a href="#">Quick view</a>
                                    </div>
                                </div>
                                <div class="new-text">
                                    <p>new</p>
                                </div>
                                <div class="sale-text">
                                    <p>-12%</p>
                                </div>
                                <div class="featured-text">
                                    <h3>Women's Slim Fit Shorts</h3>
                                    <span>$333.52 <s>$379.00</s></span>
                                    <a class="primary-btn" href="#">Add to cart</a>
                                </div>
                            </div> */}
                            <New_props
                                img="assats/image/accusantium-dolore2.jpg"
                                hover_img="assats/image/accusantium-dolore3.jpg"
                                title="Women's Slim Fit Shorts"
                                price="$333.52"
                                price1="$379.00"
                                p1="-12%"
                                p="new"
                                a="Quick view"
                                btn="Add to cart"

                            />
                        </div>
                        <div class="featured-item">
                            {/* <div class="featured-item-inner">
                                <div class="featured-img">
                                    <img src="assats/image/accusantium-dolore3.jpg" alt="accusantium-dolore" />
                                    <div class="hover-img">
                                        <img src="assats/image/accusantium-dolore6.jpg" alt="" />
                                    </div>
                                    <div class="featured-text1">
                                        <a href="#">Quick view</a>
                                    </div>
                                </div>
                                <div class="new-text">
                                    <p>new</p>
                                </div>
                                <div class="sale-text">
                                    <p>-20%</p>
                                </div>
                                <div class="featured-text">
                                    <h3>Women's Dark Blue Shorts</h3>
                                    <span>$311.20 <s>$389.00</s></span>
                                    <a class="primary-btn" href="#">Add to cart</a>
                                </div>
                            </div> */}
                            <New_props
                                img="assats/image/accusantium-dolore3.jpg"
                                hover_img="assats/image/accusantium-dolore6.jpg"
                                title="Women's Dark Blue Shorts"    
                                price="$311.20"
                                price1="$389.00"
                                p1="-20%"
                                p="new"
                                a="Quick view"
                                btn="Add to cart"

                            />
                        </div>
                        <div class="featured-item">
                            {/* <div class="featured-item-inner">
                                <div class="featured-img">
                                    <img src="assats/image/accusantium-dolore6.jpg" alt="accusantium-dolore" />
                                    <div class="hover-img">
                                        <img src="assats/image/accusantium-dolore8.jpg" alt="" />
                                    </div>
                                    <div class="featured-text1">
                                        <a href="#">Quick view</a>
                                    </div>
                                </div>
                                <div class="new-text">
                                    <p>new</p>
                                </div>
                                <div class="sale-text">
                                    <p>-10%</p>
                                </div>
                                <div class="featured-text">
                                    <h3>Women's Regular fit TOP</h3>
                                    <span>$359.10 <s>$399.00</s></span>
                                    <a class="primary-btn" href="#">Add to cart</a>
                                </div>
                            </div> */}
                            <New_props
                                img="assats/image/accusantium-dolore6.jpg"
                                hover_img="assats/image/accusantium-dolore8.jpg"    
                                title="Women's Regular fit TOP"
                                price="$359.10"
                                price1="$399.00"
                                p1="-10%"
                                p="new"
                                a="Quick view"
                                btn="Add to cart"
                            />
                        </div>
                        <div class="featured-item">
                            {/* <div class="featured-item-inner">
                                <div class="featured-img">
                                    <img src="assats/image/accusantium-dolore7.jpg" alt="accusantium-dolore" />
                                    <div class="hover-img">
                                        <img src="assats/image/accusantium-dolore.jpg" alt="" />
                                    </div>
                                    <div class="featured-text1">
                                        <a href="#">Quick view</a>
                                    </div>
                                </div>
                                <div class="new-text">
                                    <p>new</p>
                                </div>
                                <div class="sale-text">
                                    <p>-35%</p>
                                </div>
                                <div class="featured-text">
                                    <h3>Women's Crop TOP</h3>
                                    <span>$226.85 <s>$349.00</s></span>
                                    <a class="primary-btn" href="#">Add to cart</a>
                                </div>
                            </div> */}
                            <New_props
                                img="assats/image/accusantium-dolore7.jpg"
                                hover_img="assats/image/accusantium-dolore.jpg"

                                title="Women's Crop TOP"
                                price="$226.85"
                                price1="$349.00"
                                p1="-35%"
                                p="new"
                                a="Quick view"
                                btn="Add to cart"
                                
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default New