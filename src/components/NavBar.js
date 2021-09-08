import React, { useState } from "react";
import "../styles/navbar.css";
import logo from "../img/logobg.png";

function NavBar(props) {
  return (
    <div className={props.display ? "navbar-cnt navbar-display" : "navbar-cnt"}>
      <div className="navbar-img-cnt">
        <img src={logo} alt="" className="navbar-img" />
      </div>
      <div className="navbar-items">
        <div className="navbar-item-cnt">
          <div>TIMELINE</div>
          <div className="navbar-not-clicked"></div>
        </div>

        <div className="navbar-item-cnt">
          <div>PRICES</div>
          <div className="navbar-not-clicked"></div>
        </div>

        <div className="navbar-item-cnt">
          <div>ABOUT US</div>
          <div className="navbar-not-clicked"></div>
        </div>

        <div className="navbar-item-cnt">
          <div>SPONSORS</div>
          <div className="navbar-not-clicked"></div>
        </div>

        <div className="navbar-item-cnt">
          <div>CONTACT US</div>
          <div className="navbar-not-clicked"></div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
