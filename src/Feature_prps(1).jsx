import React from "react";





const Feature_prps = (p) => {
    return (
        <>

            <div class="featured-item-inner">
                <div class="featured-img">
                    <img src={p.img} alt="accusantium-dolore" />
                    <div class="hover-img">
                        <img src={p.hover_img} alt="" />
                    </div>
                    <div class="featured-text1">
                        <a href="#">{p.a}</a>
                    </div>
                </div>
                <div class="new-text">
                    <p>{p.p}</p>
                </div>
                <div class="no-sale">
                    <p>{p.p1}</p>
                </div>
             
                <div class="featured-text">
                    <h3>{p.title}</h3>
                    <span>{p.price}<s>{p.price1}</s></span>
                    <a class="primary-btn" href="#">{p.btn}</a>
                </div>
            </div>
        </>
    )
}
export default Feature_prps