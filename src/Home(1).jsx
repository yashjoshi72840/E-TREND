import React from "react";
import Header from "./Header"; 
import Slider_outer from "./Slider_outer";
import Service from "./Service";
import Shop from "./Shop";
import Bodysection from "./Bodysection";
import Footer from "./Footer";
import Ad from "./Ad";
import Feature from "./Feature";
import Summer from "./Summer";
import New from "./New";
import Brand from "./Brand";
import Cust from "./Cust";
import Contact from "./Contact";
import Aboutus from "./Aboutus";
import Gallery from "./Gallery";




const Home = () => {
    return (
        <>
            <Header />
            <Slider_outer />
            <Service />
            <Shop />
            <Ad/>
            <Feature/>
            <Summer/>
            <New/>
            <Cust/>
            <Brand/>
            <Bodysection />
            <Footer />
            <Contact/>
            <Aboutus/>
            <Gallery/>
        </>
    )
}
export default Home