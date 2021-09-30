import React, { useEffect, useState } from "react";

import "../styles/mainSection.css";

import Clock from "./Clock";
import NavBar from "./NavBar";

import Logo2 from "../img/f2.png";

function MainSection({
  reference,
  mainSectionClick,
  whyintelliHackClick,
  timelineClick,
  praposalSubmissionClick,
  whatTheySayClick,
  sponsersClick,
  pricesClick,
  contactClick,
}) {
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
    <div ref={reference}>
      <div className="main-section-cnt">
        <NavBar
          mainSectionClick={mainSectionClick}
          whyintelliHackClick={whyintelliHackClick}
          timelineClick={timelineClick}
          praposalSubmissionClick={praposalSubmissionClick}
          whatTheySayClick={whatTheySayClick}
          sponsersClick={sponsersClick}
          pricesClick={pricesClick}
          display={display}
          contactClick={contactClick}
        />
        <div className="main-section-content">
          <img className="white-logo" src={Logo2} alt="" />

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
