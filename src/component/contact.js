import React from "react";
// import { IoCall } from "react-icons/io5";

const Contact = () => {
  return (
    <section className="contact">
        <div className="contact-item">
        <div className="contact-text">
          <p>
            We offer all kinds of IT services that ensure your success
          </p>
        </div>
        <div className="con-btn">
          <button className="btn">
          <i class="fa-solid fa-phone fa-icon"></i>Contact us
          </button>
          <button className="btn"><i class="fa-solid fa-comment fa-icon"></i>
            let's talk
          </button>
        </div>
        </div>
    </section>
  );
};

export default Contact;
