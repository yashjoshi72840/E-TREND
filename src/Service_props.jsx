import React from "react";


const Service_props = (p) => {
    return (
        <>
            <div class="service-item-inner">
                <div class="icon">
                    <img src={p.img} alt="Money Back Guarantee" />
                </div>
                <div class="service-text">
                    <strong>{p.str}</strong>
                    <p>{p.p}</p>
                </div>
            </div>
        </>
    )
}
export default Service_props