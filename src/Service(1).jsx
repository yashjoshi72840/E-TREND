import React from "react";
import Service_props from "./Service_props";


const Service = () => {
    return (
        <>
            {/* <!-- start service section--> */}
            <div class="service-outer">
                <div class="container">
                    <div class="service-inner">
                        <div class="service-item">
                            {/* <div class="service-item-inner">
                                    <div class="icon">
                                        <img src="assats/image/24.png" alt=" 24/7 Online Support" />
                                    </div>
                                    <div class="service-text">
                                        <strong> 24/7 Online Support </strong>
                                        <p>Trained staffs are ready to help 24/7</p>
                                    </div>
                                </div> */}
                            <Service_props img={"assats/image/24.png"} str={" 24/7 Online Support "} p={"Trained staffs are ready to help 24/7"} />
                        </div>
                        <div class="service-item">
                            {/* <div class="service-item-inner">
                                    <div class="icon">
                                        <img src="assats/image/money-back.png" alt="Money Back Guarantee" />
                                    </div>
                                    <div class="service-text">
                                        <strong> Money Back Guarantee </strong>
                                        <p>100% money back guarantee</p>
                                    </div>
                                </div> */}
                            <Service_props img={"assats/image/money-back.png"} str={" Money Back Guarantee "} p={"100% money back guarantee"} />

                        </div>
                        <div class="service-item">
                            {/* <div class="service-item-inner">
                                <div class="icon">
                                    <img src="assats/image/free-shipping.png" alt="Free Shipping" />
                                </div>
                                <div class="service-text">
                                    <strong> Free Shipping & Return </strong>
                                    <p>Free shipping on all orders over $100</p>
                                </div>
                            </div> */}
                            <Service_props img={"assats/image/free-shipping.png"} str={" Free Shipping & Return "} p={"Free shipping on all orders over $100"} />

                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- end service section--> */}
        </>
    )
}
export default Service