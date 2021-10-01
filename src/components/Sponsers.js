import React from "react";
import "../styles/sponser.css";
import PickMeLogo from "../img/PickMe.png";
import LsegLogo from "../img/lseg_logo.png";
import GDGLogo from "../img/GDG_Logo.png";
import N9X from "../img/99x.png";
import Flip from "react-reveal/Flip";

function Sponsers({ reference }) {
  return (
    <div ref={reference} className="spn-main">
      <div className="ps-sponser-title">Sponsors</div>
      <Flip left>
        <div className="ps-main-sponser">
          <div className="sponser-title">Official Knowledge partner</div>
          <img className="sponser-img" src={GDGLogo} alt="" />
        </div>
      </Flip>
      {/* <Flip left>
        <div className="ps-main-sponser">
          <div className="sponser-title">Official platinum partner</div>
          <img className="sponser-img" src={N9X} alt="" />
        </div>
      </Flip> */}

      {/* <div className="spn-other-sponsers">
        <Flip left>
          <div className="ps-main-sponser">
            <div className="sponser-title">Official platinum partner</div>
            <img className="sponser-img" src={GDGLogo} alt="" />
          </div>
        </Flip>

        <Flip left>
          <div className="ps-main-sponser">
            <div className="sponser-title">Official platinum partner</div>
            <img className="sponser-img" src={PickMeLogo} alt="" />
          </div>
        </Flip>

        <Flip left>
          <div className="ps-main-sponser">
            <div className="sponser-title">Official platinum partner</div>
            <img className="sponser-img" src={LsegLogo} alt="" />
          </div>
        </Flip>
      </div> */}
    </div>
  );
}

export default Sponsers;
