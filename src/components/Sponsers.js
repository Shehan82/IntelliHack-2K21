import React from "react";
import "../styles/sponser.css";
import PickMeLogo from "../img/PickMe.png";
import LsegLogo2 from "../img/lseg_logo.png";
import IFSLogo from "../img/ifsLogo.png";
import GDGLogo from "../img/GDG_Logo.png";
import DialogLogo from "../img/dialogLogo.jpg";

import LsegLogo from "../img/lsegLogo.png";
import N9X from "../img/99x.png";
import Flip from "react-reveal/Flip";
import Bounce from "react-reveal/Bounce";

function Sponsers({ reference }) {
  return (
    <div ref={reference} className="spn-main">
      <div className="ps-sponser-title">Sponsors</div>
      <div className="ps-platinum-div">
        <Bounce top>
          <div className="ps-platinum">
            <div className="sponser-title">Official Platinum Sponser</div>
            <div className="img-cnt">
              <img className="ps-platinum-img" src={IFSLogo} alt="" />
            </div>
          </div>
        </Bounce>
        <Bounce bottom>
          <div className="ps-platinum">
            <div className="sponser-title">Official Platinum Sponser</div>
            <div className="img-cnt">
              <img className="ps-platinum-img lseg-img" src={LsegLogo} alt="" />
            </div>
          </div>
        </Bounce>
      </div>

      <Bounce left>
        <div className="ps-main-sponser">
          <div className="sponser-title">Official Golden Sponser</div>
          <div className="img-cnt">
            <img className="sponser-img dialog-img" src={DialogLogo} alt="" />
          </div>
        </div>
      </Bounce>

      <Bounce right>
        <div className="ps-main-sponser">
          <div className="sponser-title">Official Knowledge partner</div>
          <div className="img-cnt">
            <img className="sponser-img" src={GDGLogo} alt="" />
          </div>
        </div>
      </Bounce>

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
            <img className="sponser-img" src={LsegLogo2} alt="" />
          </div>
        </Flip>
      </div> */}
    </div>
  );
}

export default Sponsers;
