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
        <div className="navbar-item-cnt">
          <div
            onClick={(e) => {
              setActive({ active: "timeline" });
            }}
          >
            TIMELINE
          </div>
          <div
            className={
              active.active === "timeline"
                ? "navbar-clicked"
                : "navbar-not-clicked"
            }
          ></div>
        </div>

        <div className="navbar-item-cnt">
          <div
            onClick={(e) => {
              setActive({ active: "price" });
            }}
          >
            PRICES
          </div>
          <div
            className={
              active.active === "price"
                ? "navbar-clicked"
                : "navbar-not-clicked"
            }
          ></div>
        </div>

        <div className="navbar-item-cnt">
          <div
            onClick={(e) => {
              setActive({ active: "about" });
            }}
          >
            ABOUT US
          </div>
          <div
            className={
              active.active === "about"
                ? "navbar-clicked"
                : "navbar-not-clicked"
            }
          ></div>
        </div>

        <div className="navbar-item-cnt">
          <div
            onClick={(e) => {
              setActive({ active: "sponsors" });
            }}
          >
            SPONSORS
          </div>
          <div
            className={
              active.active === "sponsors"
                ? "navbar-clicked"
                : "navbar-not-clicked"
            }
          ></div>
        </div>

        <div className="navbar-item-cnt">
          <div
            onClick={(e) => {
              setActive({ active: "contact" });
            }}
          >
            CONTACT US
          </div>
          <div
            className={
              active.active === "contact"
                ? "navbar-clicked"
                : "navbar-not-clicked"
            }
          ></div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
