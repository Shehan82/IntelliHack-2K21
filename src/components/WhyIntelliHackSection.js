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
    image:
      "https://firebasestorage.googleapis.com/v0/b/intellihack.appspot.com/o/images921%2Fintelli1.jpg?alt=media&token=3dbe51e8-5ccd-4fc5-8e2d-395b8cdfca99",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/intellihack.appspot.com/o/images921%2Fintelli2.jpg?alt=media&token=6a7b5170-f128-4112-8304-63f6aebf74f3",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/intellihack.appspot.com/o/images921%2Fintelli3.jpg?alt=media&token=1996ab46-6bb4-4bdd-b4af-d60a792eaf7b",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/intellihack.appspot.com/o/images921%2Fintelli4.jpg?alt=media&token=9d803190-b24e-4a16-bc67-b55e21d4abe3",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/intellihack.appspot.com/o/images921%2Fintelli5.jpg?alt=media&token=4f56a270-8595-4431-a2aa-7bcf605e620e",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/intellihack.appspot.com/o/images921%2Fintelli6.jpg?alt=media&token=380f12fc-fe60-4ab6-9aae-af3c485988b9",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/intellihack.appspot.com/o/images921%2Fintelli7.jpg?alt=media&token=b4535cb5-b83e-479b-a638-28800e7c0b4e",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/intellihack.appspot.com/o/images921%2Fintelli8.jpg?alt=media&token=80e18f0e-b891-43d1-9552-7a592ebfef49",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/intellihack.appspot.com/o/images921%2Fintelli9.jpg?alt=media&token=c21b7ef9-1eb0-4101-9dc5-b5863594258d",
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
              IntelliHack is the first-ever Machine Learning hackathon in Sri
              Lanka. This is one of the year’s most anticipated, exciting, and
              electrifying events that innovative minds look forward to. The
              contestants get the privilege to network with some of the topmost
              experts in the industry and expose themselves to this attractive
              technology that would benefit them immensely in their future
              activities. IntelliHack is a great platform for curious minds
              interested in machine learning to meet and collaborate with each
              other. It also encourages the youth to participate and be a part
              of this revolutionary technology and sciences which are the
              upcoming breakthroughs in the technical world. Moreover, among
              many more benefits, IntelliHack aims to raise awareness among
              society about machine learning and artificial intelligence.
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
