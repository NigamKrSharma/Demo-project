import React from "react";
import woxrologo from "../assets/woxrologo.png.jpeg";

const Header = () => {
  return (
    <header className="header">
      <img src={woxrologo} alt="woxro" />
      <i class="fa-sharp fa-solid fa-bars faicon" ></i>

    </header>
  );
};

export default Header;
