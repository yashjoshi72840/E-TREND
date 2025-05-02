import React from "react";
import Brand_props from "./Brand_props";




const Brand = () => {
    return (
        <>
            <div class="brand-outer">
                <div class="container">
                    <div class="title">
                        <h2>shop by <i>brand </i></h2>
                    </div>
                    <div class="brand-inner">
                        {/* <div class="brand-item">
                            <div class="brand-item-inner">
                                <img src="assats/image/1.jpg" alt="1" />
                            </div>
                        </div> */}
                         <Brand_props
                            src="assats/image/1.jpg"
                            alt="1"
                        />
                        <Brand_props
                            src="assats/image/2.jpg"
                            alt="2"
                        />
                        <Brand_props
                            src="assats/image/3.jpg"
                            alt="3"
                        />
                        <Brand_props
                            src="assats/image/4.jpg"
                            alt="4"
                        />
                        <Brand_props
                            src="assats/image/5.jpg"
                            alt="5"
                        />
                        {/* <div class="brand-item">
                            <div class="brand-item-inner">
                                <img src="assats/image/2.jpg" alt="2" />
                            </div>
                        </div>
                       
                        <div class="brand-item">
                            <div class="brand-item-inner">
                                <img src="assats/image/3.jpg" alt="3" />
                            </div>
                        </div>
                        <div class="brand-item">
                            <div class="brand-item-inner">
                                <img src="assats/image/4.jpg" alt="4" />
                            </div>
                        </div>
                        <div class="brand-item">
                            <div class="brand-item-inner">
                                <img src="assats/image/5.jpg" alt="5" />
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Brand