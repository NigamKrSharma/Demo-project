import React from "react";
// import logo from '../assets/logo-1.PNG'

const Service = ({img,title, text }) => {
  return (
    <article className="service">
      <span className="service-icon">
        
      <img src={img} alt={title} width="40px" height="40" />
      </span>
      <div className="service-info">
        <h4 className="service-title">{title}</h4>
        <p className="service-text">{text}</p>
      </div>
    </article>
  );
};

export default Service;
