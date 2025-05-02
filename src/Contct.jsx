import React from "react";
import { Link } from "react-router-dom";

const Contct = () => {

    return (

       <div>
  <div className="contactus-outer">
    <div className="container">
      <div className="title">
        <h2>Contact  <i>Us</i></h2>
      </div>
      <div className="contactus-inner">
        <div className="contactus-child">
          <strong>Write to us</strong>
          <p>Jot us a note and well get back to you as quickly as possible.</p>
          <div className="fill-info">
            <label htmlFor="name">Name <span>*</span></label><br />
            <input type="text" id="name" /> <br />
            <label htmlFor="email">Email <span>*</span></label><br />
            <input type="email" id="email" /><br />
            <label htmlFor="phone">Phone Number</label><br />
            <input type="text" /><br />
            <label htmlFor> What's On Your Mind?</label><br />
            <textarea name id cols={20} rows={5} defaultValue={""} /><br />
            <Link to />Submit
          </div>
        </div>
        <div className="contactus-child">
          <strong>Etrend Store</strong>
          <div className="fill-info2">
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
  <div className="title">
    <h2>About  <i>Us</i></h2>
  </div>
  <section>
    <div className="image">
      <img src="assats/image/person.jpg" alt />
    </div>
    <div className="content">
      <h2>About Us</h2>
      <span />
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis aspernatur voluptas inventore ab voluptates nostrum minus illo laborum harum laudantium earum ut, temporibus fugiat sequi explicabo facilis unde quos corporis!</p>
      <ul className="links">
        <li><a href="#">work</a></li>
        <div className="vertical-line" />
        <li><a href="#">service</a></li>
        <div className="vertical-line" />
        <li><a href="#">contact</a></li>
      </ul>
    </div>
  </section>
</div>

    )

}
export default Contct;