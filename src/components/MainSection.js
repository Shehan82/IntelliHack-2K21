import React, { useEffect, useState } from "react";
import * as THREE from "three";
import "../styles/mainSection.css";
import logo from "../img/logo.png";
import Clock from "./Clock";
import NavBar from "./NavBar";
import Typewriter from "typewriter-effect";
import Logo from "../img/logoWhite.png";

function MainSection() {
  const [display, setdisplay] = useState(false);

  const displayNavBar = () => {
    if (window.scrollY > 0) {
      setdisplay(true);
    } else if (window.scrollY <= 0) {
      setdisplay(false);
    }
  };

  window.addEventListener("scroll", displayNavBar);
  return (
    <div>
      <div className="main-section-cnt">
        <NavBar display={display} />
        <div className="main-section-content">
          <img className="white-logo" src={Logo} alt="" />
          {/* <div className="main-section-main-text">IntelliHack'21</div> */}
          {/* <div className="main-section-sub-text">
            <Typewriter
              options={{ autoStart: true, loop: true }}
              onInit={(typewriter) => {
                typewriter

                  .typeString("Artificial, But Inteligent")
                  .callFunction(() => {
                    console.log("String typed out!");
                  })
                  .pauseFor(2500)
                  .deleteAll()
                  .callFunction(() => {
                    console.log("All strings were deleted");
                  })
                  .typeString("Artificial, But Inteligent")
                  .pauseFor(2500)
                  .start();
              }}
            />
          </div> */}

          <div className="clock-cnt">
            <div className="clock-text">Proposal submission ends in</div>
            <Clock />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainSection;
