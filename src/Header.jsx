import React from "react";
import Header_props from "./Header_props";
import { headerMenuOption } from "./constant";
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <>
            {/* <!-- start header section--> */}
            <div class="header">
                {/* <!-- start header-top section--> */}
                <div class="header-top">
                    <div class="container">
                        <div class="top-inner">
                            <div class="item">
                                <span class="span1"><a href="#">English</a></span>
                                <span class="span2"><a href="#">USD $ </a></span>
                            </div>
                            <div class="item">
                                <span class="span3"><a href="#">Sign in</a> </span>
                                <span class="span4"><a href="#">Create An Account</a></span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- end eader-top section--> */}
                {/* <!-- start eader-middle section--> */}
                <div class="header-middel">
                    <div class="container">
                        <div class="middel-inner">
                            <div class="item-l">
                                <img src="assats/image/etrend-logo.png" alt="" />
                            </div>
                            <div class="item-r">
                                <div class="item-l-inner">
                                    <div class="item-i-l">
                                        <form action="">
                                            <input type="text " placeholder="Search our catalog" />
                                            <i class="fa-solid fa-magnifying-glass"></i>
                                        </form>
                                    </div>
                                    <div class="item-i-r">
                                        <div class="text">
                                            {/* <div class="icon">
                                                <i class="fa-solid fa-phone"></i>
                                                <p>
                                                    Call Us Now
                                                    <span>(123)4567-890</span>
                                                </p>
                                            </div> */}

                                            <Header_props p={"Call Us Now"} span={"(123)4567-890"} />
                                            <Header_props p={"my cart"} span={" 0 Item(s)"} />
                                            {/* <div class="icon">
                                                <i class="fa-solid fa-bag-shopping"></i>
                                                <p><span>my cart </span> 0 Item(s)</p>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- end eader-mi section--> */}
                {/* <!-- start eader-Buttom section--> */}
                {/* <div class="header-buttom-outer">
                    <div class="container">
                        <ul class="buttom-inner">
                            <li><a href="#">home</a></li>
                            <Header_props a={"home"} />
                            <li>
                                <a href="#" class="btn-icon">shop </a>
                                <ul class="sub-item">
                                    <li>
                                        <a href="#" class="btn-icon1">fashion</a>
                                        <ul class="sub-item-inner">
                                            <li><a href="#">men</a></li>
                                            <li><a href="#">women</a></li>
                                            <li><a href="#">kids</a></li>
                                            <li><a href="#">accrssories</a></li>

                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#" class="btn-icon1">jewellery</a>
                                        <ul class="sub-item-inner">
                                            <li><a href="#">Rings</a></li>
                                            <li><a href="#">Bracelets</a></li>
                                            <li><a href="#">Necklaces</a></li>
                                            <li><a href="#">Wedding Bands</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#" class="btn-icon1">furniture</a>
                                        <ul class="sub-item-inner">
                                            <li><a href="#">Living Room</a></li>
                                            <li><a href="#">Kitchen</a></li>
                                            <li><a href="#">Office</a></li>
                                            <li><a href="#">Home Decor</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#" class="btn-icon1">autoparts</a>
                                        <ul class="sub-item-inner">
                                            <li><a href="#">Home Decor </a></li>
                                            <li><a href="#">Exhaust Parts</a></li>
                                            <li><a href="#">Brake Parts</a></li>
                                            <li><a href="#">Body Parts</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <Header_props b={"shop"} a2={"fashion"} a3={"men"} a4 = { "women"} a5 = { "kids"} a6 = { "accrssories"}/>
                            <Header_props b={"shop"} b2={"jewellery"} a3={"men"} a4 = { "women"} a5 = { "kids"} a6 = { "accrssories"}/>

                            <li>
                                <a href="#" class="btn-icon">Electronics </a>
                                <ul class="sub-item">
                                    <li>
                                        <a href="#" class="btn-icon1">mobiles</a>
                                        <ul class="sub-item-inner">
                                            <li><a href="#">apple </a></li>
                                            <li><a href="#">black berry</a></li>
                                            <li><a href="#">oneplus</a></li>
                                            <li><a href="#">sony</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#" class="btn-icon1">cameras</a>
                                        <ul class="sub-item-inner">
                                            <li><a href="#">DSLR </a></li>
                                            <li><a href="#">lences</a></li>
                                            <li><a href="#">tripods</a></li>
                                            <li><a href="#">batteries</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#" class="btn-icon">sports & books </a><Header_props a={"sports& books"} />
                                <ul class="sub-item">
                                    <li><a href="#">sports</a></li>
                                    <li><a href="#">books</a></li>
                                </ul>
                            </li>
                            <li><a href="#">sale</a></li>
                            <li><a href="#">contact Us</a></li>
                            <Header_props a={"sale"} />
                            <Header_props a={"contact Us"} />

                        </ul>
                    </div>
                </div> */}
                <div class="header-buttom-outer">
                    <div class="container">
                        <ul class="buttom-inner">
                            {
                                headerMenuOption.map((item, index) => {
                                    return (
                                        <>
                                            {
                                                item.menu === "simple" && <li><Link to={item.path}>{item.label}</Link></li>
                                            }
                                            {
                                                item.menu === "dropdown" && <li>
                                                    <link to={item.path} class="btn-icon">{item.label} </link>
                                                    <ul class="sub-item">
                                                        {
                                                            item.subMenu.map((submenu, subindex) => {
                                                                return (
                                                                    <li>
                                                                        {
                                                                            submenu?.subchildMenu ?
                                                                                <>
                                                                                    <link to={item.path} class="btn-icon1">{submenu.label}</link>
                                                                                    <ul class="sub-item-inner">
                                                                                        {
                                                                                            submenu.subchildMenu.map((subChildMenu, subChildIndex) => {
                                                                                                return (
                                                                                                    <li><Link to={item.path}>{subChildMenu.label}</Link></li>
                                                                                                )
                                                                                            })
                                                                                        }
                                                                                    </ul>
                                                                                </>
                                                                                : <Link to={submenu.path}>{submenu.label}</Link>
                                                                        }
                                                                    </li>
                                                                )
                                                            })
                                                        }
                                                    </ul>
                                                </li>
                                            }
                                        </>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
                {/* <!-- end header buttom section--> */}
            </div>
            {/* <!-- end header section--> */}
        </>
    )
}
export default Header;