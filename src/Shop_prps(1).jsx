import React from "react";

const Shop_prps = (p) => {
    return (
        <>
            <div class="item-row-inner">
                <div class="shop-img">
                    <img src={p.img} alt="thumb1" />
                </div>
                <div class="shop-text">{p.text}</div>
                <div class="shop-hove">
                    <a href="#"><span>{p.a}</span> </a>
                </div>
            </div>
        </>
    )
}
export default Shop_prps