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

function WhyIntelliHackSection() {
  return (
    <div className="why-intelliHack-section">
      <div className="slide-cnt">
        <div className="why-intellihack-cnt">
          <div className="why-intellihack-box">
            <div className="why-intellihack-topic">Why IntelliHack ?</div>
            <div className="why-intellihack-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
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
