import React from "react";




const Footer_props = (p) => {
    return (
        <>
            <div class="top-item">
                <div class="top-title">{p.title}</div>
                <ul>
                    
                    <li><a href=""> {p.a} </a></li>
                    <li><a href=""> {p.b} </a></li>

                    <li><a href=""> {p.c} </a></li>
                    <li><a href=""> {p.d} </a></li>
                    <li><a href=""> {p.e} </a></li>
                </ul>
            </div>

            
        </>
    )
}

export default Footer_props




