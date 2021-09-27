import React, { useState } from "react";
import "../styles/navbar.css";
import logo from "../img/logobg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faBars } from "@fortawesome/free-solid-svg-icons";

function NavBar(props) {
  const [clicked, setclicked] = useState(false);
  return (
    <div className={props.display ? "navbar-cnt navbar-display" : "navbar-cnt"}>
      <div className="mobile-menu-row">
        <div onClick={props.mainSectionClick} className="navbar-img-cnt">
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
        <div onClick={props.click} className="mobile-row">
          Timeline
        </div>
        <div onClick={props.whyintelliHackClick} className="mobile-row">
          IntelliHack?
        </div>
        <div onClick={props.timelineClick} className="mobile-row">
          Timeline
        </div>
        <div onClick={props.praposalSubmissionClick} className="mobile-row">
          Submissions
        </div>
        <div onClick={props.sponsersClick} className="mobile-row">
          Sponsors
        </div>
        <div onClick={props.whatTheySayClick} className="mobile-row">
          What They Say
        </div>
        <div className="mobile-row">Prices</div>
        <div className="mobile-row">About Us</div>
      </div>

      <div className="navbar-items">
        <div className="navbar-item-cnt">
          <div onClick={props.whyintelliHackClick}>IntelliHack?</div>
          <div className="navbar-not-clicked"></div>
        </div>

        <div className="navbar-item-cnt">
          <div onClick={props.timelineClick}>Timeline</div>
          <div className="navbar-not-clicked"></div>
        </div>

        <div className="navbar-item-cnt">
          <div onClick={props.praposalSubmissionClick}>Submissions</div>
          <div className="navbar-not-clicked"></div>
        </div>

        <div className="navbar-item-cnt">
          <div onClick={props.sponsersClick}>Sponsors</div>
          <div className="navbar-not-clicked"></div>
        </div>

        <div className="navbar-item-cnt">
          <div onClick={props.whatTheySayClick}>What They Say</div>
          <div className="navbar-not-clicked"></div>
        </div>
        <div className="navbar-item-cnt">
          <div>Prices</div>
          <div className="navbar-not-clicked"></div>
        </div>
        <div className="navbar-item-cnt">
          <div>About Us</div>
          <div className="navbar-not-clicked"></div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
