import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@material-ui/core";
import "../styles/whyintelliHack.css";

import Photo1 from "../img/photo1.jpg";
import Photo2 from "../img/photo2.jpg";
import Photo3 from "../img/photo6.jpg";
import Photo4 from "../img/photo4.jpg";

var items = [
  {
    image: Photo1,
  },
  {
    image: Photo2,
  },
  {
    image: Photo3,
  },
  {
    image: Photo4,
  },
];

var blaaa = () => {
  if (window.innerWidth < 1150) {
    console.log(document.querySelector(".why-intellihack-box").style.height);
  }
};

window.addEventListener("resize", blaaa);

function WhyIntelliHackSection({ reference }) {
  return (
    <div ref={reference} className="why-intelliHack-section">
      <div className="slide-cnt">
        <div className="why-intellihack-cnt">
          <div className="why-intellihack-box">
            <div className="why-intellihack-topic">Why IntelliHack ?</div>
            <div className="why-intellihack-text">
              IntelliHack is the first ever Machine Learning hackathon in Sri
              Lanka. This is one of the year’s most anticipated, exciting, and
              electrifying events that innovative minds look forward to. The
              contestants get the privilege to network with some of the topmost
              experts in the industry and expose themselves to this attractive
              technology that would benefit them immensely in their future
              activities.
            </div>
          </div>
        </div>
        <Carousel
          timeout={300}
          interval={3000}
          className="carousel"
          indicators={false}
          animation="slide"
          stopAutoPlayOnHover={false}
        >
          {items.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default WhyIntelliHackSection;

function Item(props) {
  return (
    <div>
      <img className="carousel-img" src={props.item.image} alt="" />
    </div>
  );
}
