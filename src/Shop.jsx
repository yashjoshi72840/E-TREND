import React from "react";
import Shop_prps from "./Shop_prps";


const Shop = () => {
    return (
        <>
            {/* <!-- start Shop  section--> */}
            <div class="shop-outer">
                <div class="container">
                    <div class="title">
                        <h2>shop by category</h2>
                    </div>
                    <div class="shop-item-row">
                        <div class="item-row">
                            {/* <div class="item-row-inner">
                                <div class="shop-img">
                                    <img src="assats/image/thumb1.png" alt="thumb1" />
                                </div>
                                <div class="shop-text">Shop</div>
                                <div class="shop-hove">
                                    <a href="#"><span>View More</span> </a>
                                </div>
                            </div> */}
                            <Shop_prps img={"assats/image/thumb1.png"} text={"Shirts"} a={"View More"} />

                        </div>
                        <div class="item-row">
                            {/* <div class="item-row-inner">
                                <div class="shop-img">
                                    <img src="assats/image/thumb2.png" alt="thumb2" />
                                </div>
                                <div class="shop-text">Shoprts</div>
                                <div class="shop-hove">
                                    <a href="#"><span>View More</span> </a>
                                </div>
                            </div> */}
                            <Shop_prps img={"assats/image/thumb2.png"} text={"Shoprts"} a={"View More"} />

                        </div>
                        <div class="item-row">
                            {/* <div class="item-row-inner">
                                <div class="shop-img">
                                    <img src="assats/image/thumb3.jpg" alt="thumb3" />
                                </div>
                                <div class="shop-text">Electronics</div>
                                <div class="shop-hove">
                                    <a href="#"><span>View More</span> </a>
                                </div>
                            </div> */}
                            <Shop_prps img={"assats/image/thumb3.jpg"} text={"Electronics"} a={"View More"} />

                        </div>
                        <div class="item-row">
                            {/* <div class="item-row-inner">
                                <div class="shop-img">
                                    <img src="assats/image/thumb4.jpg" alt="thumb4" />
                                </div>
                                <div class="shop-text">Sale</div>
                                <div class="shop-hove">
                                    <a href="#"><span>View More</span> </a>
                                </div>
                            </div> */}
                            <Shop_prps img={"assats/image/thumb4.jpg"} text={"Sale"} a={"View More"} />

                        </div>
                        <div class="item-row">
                            {/* <div class="item-row-inner">
                                <div class="shop-img">
                                    <img src="assats/image/thumb5.jpg" alt="thumb5" />
                                </div>
                                <div class="shop-text">Fashion</div>
                                <div class="shop-hove">
                                    <a href="#"><span>View More</span> </a>
                                </div>
                            </div> */}
                            <Shop_prps img={"assats/image/thumb5.jpg"} text={"Fashion"} a={"View More"} />

                        </div>
                        <div class="item-row">
                            {/* <div class="item-row-inner">
                                <div class="shop-img">
                                    <img src="assats/image/thumb6.jpg" alt="thumb6" />
                                </div>
                                <div class="shop-text">Jewellery</div>
                                <div class="shop-hove">
                                    <a href="#"><span>View More</span> </a>
                                </div>
                            </div> */}
                            <Shop_prps img={"assats/image/thumb6.jpg"} text={"Jewellery"} a={"View More"} />
                        </div>

                    </div>
                </div>
            </div>

            {/* <!-- end Shop  section--> */}
        </>
    )
}
export default Shop