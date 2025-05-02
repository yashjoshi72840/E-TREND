import React from "react";




const Ad_props = (p) => {
    return (
        <>
            <div class="ads-item-inner">
                <img src={p.img} alt="ab-block-1" />
                <div class="ads-text">
                    <p>
                        {p.p}
                        <span>{p.span}</span>
                        <br />
                        <strong>{p.str}</strong>
                        <br />{p.p2}
                        <br />{p.p3}
                        
                    </p>
                    <a class="primary-btn" href="#">{p.a}</a>
                </div>
            </div>
        </>
    )
}
export default Ad_props