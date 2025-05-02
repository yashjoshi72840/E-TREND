import React from "react";
import Ad_props from "./Ad_props";




const Ad = () => {
    return (
        <>
            {/* <!-- start ads section--> */}
            <div class="ads-outer">
                <div class="container">
                    <div class="ads-inner">
                        <div class="ads-item">
                            {/* <div class="ads-item-inner">
                                <img src="assats/image/ad-block-1.jpg" alt="ab-block-1" />
                                <div class="ads-text">
                                    <p>
                                        Only
                                        <span>Three</span>
                                        <br />
                                        <strong>days left</strong>
                                        <br />
                                        on Fashion <br />
                                        Weeks sale!
                                    </p>
                                    <a class="primary-btn" href="#">shop today</a>
                                </div>
                            </div> */}
                            <Ad_props img={"assats/image/ad-block-1.jpg"} p={"Only"} span={"Three"} str={"days left"} p2={"on Fashion"} p3={"Weeks sale!"} a={"shop today"} />
                        </div>
                        <div class="ads-item">
                            {/* <div class="ads-item-inner">
                                <img src="assats/image/ad-block-2.jpg" alt="ad-block-2" />
                                <div class="ads-text">
                                    <p>
                                        Get
                                        <span>Winter</span>
                                        <br />
                                        <strong>lookbook</strong>
                                        <br />
                                        with online <br />
                                        purchase
                                    </p>
                                    <a class="primary-btn" href="#">get your copy</a>
                                </div>
                            </div> */}
                            <Ad_props img={"assats/image/ad-block-2.jpg"} p={"Get"} span={"Winter"} str={"lookbook"} p2={"with online "} p3={"purchase"} a={"get your copy"} />
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- end ads  section--> */}


           
        </>
    )
}
export default Ad