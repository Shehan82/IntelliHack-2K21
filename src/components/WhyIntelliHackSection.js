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
      "https://firebasestorage.googleapis.com/v0/b/intellihack.appspot.com/o/images921%2Fp2.jpg?alt=media&token=bd640818-5df5-4cee-9d4d-c5eea489fd27",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/intellihack.appspot.com/o/images921%2Fp4.jpg?alt=media&token=a44bff38-d2ae-465f-8f20-01dfc24c5b9d",
  },
  {
    image: Photo2,
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/intellihack.appspot.com/o/images921%2Fp3.jpg?alt=media&token=82f5e379-3759-4d31-967b-9804ca7ec042",
  },
  {
    image: Photo3,
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/intellihack.appspot.com/o/images921%2Fp1.jpg?alt=media&token=8b458efe-a266-48a4-a699-1593ebbe48e9",
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
              activities.IntelliHack is a great platform for those curious minds
              interested in machine-based learning to meet and collaborate with
              each other. It also encourages the youth to participate and be a
              part of this revolutionary technology and sciences which are the
              upcoming breakthroughs in the computer world. And among many more
              benefits, IntelliHack aims to raise awareness among the society
              about these machine-based learning and artificial intelligence.
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
