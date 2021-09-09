import React, { useState } from "react";
import "../styles/navbar.css";
import logo from "../img/logobg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faBars } from "@fortawesome/free-solid-svg-icons";

function NavBar(props) {
  const [clicked, setclicked] = useState(false);
  return (
    <div className={props.display ? "navbar-cnt navbar-display" : "navbar-cnt"}>
      {console.log("hellooooooo")}
      <div className="mobile-menu-row">
        <div className="navbar-img-cnt">
          <img src={logo} alt="" className="navbar-img" />
        </div>
        <div
          onClick={() => {
            clicked ? setclicked(false) : setclicked(true);
          }}
          className="navbar-menu"
        >
          <FontAwesomeIcon style={{ fontSize: 25 }} icon={faBars} />
        </div>
      </div>
      <div
        className={
          clicked && props.display
            ? "mobile-menu-item-cnt-display"
            : "mobile-menu-item-cnt"
        }
      >
        <div className="mobile-row">TIMELINE</div>
        <div className="mobile-row">PRICES</div>
        <div className="mobile-row">ABOUT Us</div>
        <div className="mobile-row">SPONSORS</div>
        <div className="mobile-row">CONTACT US</div>
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
