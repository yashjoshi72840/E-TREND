import React from "react";

const Aboutus = () => {
    return (
        <>
            <div class="title">
                <h2>About  <i>Us</i></h2>
            </div>
            <section>
                <div class="image">
                    <img src="assats/image/person.jpg" alt="" />
                </div>

                <div class="content">
                    <h2>About Us</h2>
                    <span></span>

                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis aspernatur voluptas inventore ab voluptates nostrum minus illo laborum harum laudantium earum ut, temporibus fugiat sequi explicabo facilis unde quos corporis!</p>

                    <ul class="links">
                        <li><a href="#">work</a></li>

                        <div class="vertical-line"></div>

                        <li><a href="#">service</a></li>

                        <div class="vertical-line"></div>

                        <li><a href="#">contact</a></li>
                    </ul>


                </div>
            </section>
        </>
    )
}

export default Aboutus;