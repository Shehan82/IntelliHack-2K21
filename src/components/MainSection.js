import React, { useEffect, useState } from "react";
import * as THREE from "three";
import "../styles/mainSection.css";
import logo from "../img/logo.png";
import Clock from "../components/Clock";
import NavBar from "../components/NavBar";
import Typewriter from "typewriter-effect";

function MainSection() {
  const [display, setdisplay] = useState(false);

  const displayNavBar = () => {
    // console.log(window.scrollY);
    if (window.scrollY > 0) {
      setdisplay(true);
    } else if (window.scrollY <= 0) {
      setdisplay(false);
    }
  };

  window.addEventListener("scroll", displayNavBar);
  return (
    <div className="hgx">
      <div className="container">
        <NavBar display={display} />
        <div className="logo-cnt"></div>

        <div className="content">
          {/* <img className="logo" src={logo} alt="" /> */}
          <h1 className="main-text">IntelliHack '21</h1>
          {/* <p>Artificial, But Inteligent</p> */}
          {/* <div className="type-writer">
            <Typewriter
              options={{ autoStart: true, loop: true }}
              onInit={(typewriter) => {
                typewriter

                  .typeString(
                    "First ever machine learning hackerthon sri Lanka"
                  )
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

          <div className="clock-div">
            <Clock />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainSection;
