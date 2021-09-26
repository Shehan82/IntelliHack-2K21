import React from "react";
import "../styles/sponser.css";
import PickMeLogo from "../img/PickMe.png";
import LsegLogo from "../img/lseg_logo.png";
import GDGLogo from "../img/GDG_Logo.png";
import N9X from "../img/99x.png";

function Sponsers() {
  return (
    <div className="spn-main">
      <div className="ps-sponser-title">Sponsors</div>
      <div className="ps-main-sponser">
        <div className="sponser-title">Official platinum partner</div>
        <img className="sponser-img" src={PickMeLogo} alt="" />
      </div>
      <div className="ps-main-sponser">
        <div className="sponser-title">Official platinum partner</div>
        <img className="sponser-img" src={N9X} alt="" />
      </div>

      <div className="spn-other-sponsers">
        <div className="ps-main-sponser">
          <div className="sponser-title">Official platinum partner</div>
          <img className="sponser-img" src={GDGLogo} alt="" />
        </div>
        <div className="ps-main-sponser">
          <div className="sponser-title">Official platinum partner</div>
          <img className="sponser-img" src={PickMeLogo} alt="" />
        </div>
        <div className="ps-main-sponser">
          <div className="sponser-title">Official platinum partner</div>
          <img className="sponser-img" src={LsegLogo} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Sponsers;
