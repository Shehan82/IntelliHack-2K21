import React, { useState } from "react";
import "../styles/navbar.css";
import logo from "../img/logobg.png";

function NavBar(props) {
  const [active, setActive] = useState({
    active: "home",
  });

  console.log(active);

  console.log(props.display);
  return (
    <div className={props.display ? "navbar-cnt navbar-display" : "navbar-cnt"}>
      <div className="navbar-img-cnt">
        <img src={logo} alt="" className="navbar-img" />
      </div>
      <div className="navbar-items">
        <div
          onClick={(e) => {
            setActive({ active: "timeline" });
          }}
          className={
            active.active === "timeline" ? "navbar-item-active" : "navbar-item"
          }
        >
          TIMELINE
        </div>
        <div
          onClick={(e) => {
            setActive({ active: "price" });
          }}
          className={
            active.active === "price" ? "navbar-item-active" : "navbar-item"
          }
        >
          PRICES
        </div>
        <div
          onClick={(e) => {
            setActive({ active: "about" });
          }}
          className={
            active.active === "about" ? "navbar-item-active" : "navbar-item"
          }
        >
          ABOUT US
        </div>
        <div
          onClick={(e) => {
            setActive({ active: "sponsors" });
          }}
          className={
            active.active === "sponsors" ? "navbar-item-active" : "navbar-item"
          }
        >
          SPONSORS
        </div>
        <div
          onClick={(e) => {
            setActive({ active: "contact" });
          }}
          className={
            active.active === "contact" ? "navbar-item-active" : "navbar-item"
          }
        >
          CONTACT US
        </div>
      </div>
    </div>
  );
}

export default NavBar;
