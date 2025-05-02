import React from "react";
import Footer_props from "./Footer_props";


const Footer = () => {
    return (
        <>
            {/* <!-- start footer section--> */}
            <div class="footer">
                <div class="container">
                    <div class="footer-top">
                        <div class="top-inner">
                            <div class="top-item">
                                <div class="top-title">Contact</div>
                                <ul class="top-l">
                                    <li>
                                        <span class="location">Address</span>

                                        Etrend
                                        <br />
                                        123 Street, London
                                        <br />
                                        United States
                                    </li>
                                    <li>
                                        <span class="mail">Mail us</span>
                                        <a href="#" class="info">abhi@gmail.com</a>
                                    </li>
                                    <li>
                                        <span class="call"> Phone </span>
                                        <a href="tel:12345678" class="info">12977739</a>
                                    </li>
                                </ul>
                            </div>
                            {/* <div class="top-item">
                                <div class="top-title">Products</div>
                                <ul>
                                    <li><a href=""> Secure payment </a></li>
                                    <li><a href=""> Prices drop </a></li>

                                    <li><a href=""> New products </a></li>
                                    <li><a href=""> Best sales </a></li>
                                    <li><a href=""> Stores </a></li>
                                </ul>
                            </div>
                            <div class="top-item">
                                <div class="top-title">Our company</div>
                                <ul>
                                    <li>
                                        <a href="">Delivery</a>
                                    </li>
                                    <li><a href=""> Legal Notice </a></li>
                                    <li><a href=""> About us </a></li>
                                    <li><a href=""> Contact us </a></li>
                                </ul>
                            </div>
                            <div class="top-item">
                                <div class="top-title">your Account</div>
                                <ul>
                                    <li><a href=""> Personal info </a></li>
                                    <li><a href=""> Orders </a></li>
                                    <li><a href=""> Credit slips </a></li>
                                    <li><a href=""> Addresses </a></li>
                                </ul>
                            </div> */}
                            
                            <Footer_props
                                title="Products"
                                a="Secure payment"
                                b="Prices drop" 
                                c="New products"
                                d="Best sales"
                                e="Stores"

                            />
                            <Footer_props
                                title="Our company"
                                a="Delivery"
                                b="Legal Notice"
                                c="About us"
                                d="Contact us"
                                
                            />
                            <Footer_props
                                title="your Account"
                                a="Personal info"
                                b="Orders"
                                c="Credit slips"
                                d="Addresses"

                            />
                        </div>
                    </div>
                    <div class="footer-middel">
                        <div class="middel-inner">
                            <div class="logo">
                                <img src="assats/image/etrend-logo1.png" alt="logo" />
                            </div>
                            <p>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                                quae ab illo inventore veritatis et quasi architecto beatae vitae
                                dicta sunt explicabo.
                            </p>
                            <ul>
                                <li><i class="fa-brands fa-facebook-f"></i></li>
                                <li><i class="fa-brands fa-twitter"></i></li>
                                <li><i class="fa-brands fa-pinterest-p"></i></li>
                                <li><i class="fa-brands fa-youtube"></i></li>
                                <li><i class="fa-brands fa-vimeo-v"></i></li>
                                <li><i class="fa-brands fa-instagram"></i></li>
                            </ul>
                        </div>
                    </div>
                    <div class="footer-bottom">
                        <div class="bottom-inner">
                            <p><a href="#"> © 2024 - Ecommerce software by PrestaShop™ </a></p>
                            <ul>
                                <li><i class="fa-brands fa-cc-visa"></i></li>
                                <li><i class="fa-brands fa-cc-paypal"></i></li>
                                <li><i class="fa-brands fa-cc-discover"></i></li>
                                <li><i class="fa-brands fa-cc-amex"></i></li>
                                <li><i class="fa-brands fa-cc-mastercard"></i></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- end footer section--> */}
        </>
    )
}
export default Footer