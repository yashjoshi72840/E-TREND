import React from "react";

const Contact = () => {
    return (
        <>
            <div class="contactus-outer">
                <div class="container">
                    <div class="title">
                        <h2>Contact  <i>Us</i></h2>
                    </div>
                    <div class="contactus-inner">
                        <div class="contactus-child">
                            <strong>Write to us</strong>
                            <p>Jot us a note and well get back to you as quickly as possible.</p>
                            <div class="fill-info">
                                <label for="name">Name <span >*</span></label><br />
                                <input type="text" id="name" /> <br />
                                <label for="email">Email <span >*</span></label><br />
                                <input type="email" id="email" /><br />
                                <label for="phone">Phone Number</label><br />
                                <input type="text" /><br />
                                <label for=""> What's On Your Mind?</label><br />
                                <textarea name="" id="" cols="20" rows="5"></textarea><br />
                                <a href="">Submit</a>
                            </div>
                        </div>
                        <div class="contactus-child">
                            <strong>Etrend Store</strong>
                            <div class="fill-info2">
                                <span>Address:</span>
                                <p>123 Street, City, London</p>
                                <span>Phone:</span>
                                <p>(123)456 789</p>
                                <span>Email:</span>
                                <p>mail@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Contact;