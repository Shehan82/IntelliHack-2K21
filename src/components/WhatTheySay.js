import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/whatSay.css";
import { multiData } from "./whatSayData";
import Ramith from "../img/ramith.png";
import Sula from "../img/sula.png";
import Dhanu from "../img/dhanu.png";
import Shashika from "../img/shashika.png";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import { red } from "@material-ui/core/colors";

const PreviousBtn = (props) => {
  console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos style={{ color: "blue", fontSize: "30px" }} />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{ color: "blue", fontSize: "30px" }} />
    </div>
  );
};

const carouselProperties = {
  prevArrow: <PreviousBtn />,
  nextArrow: <NextBtn />,
  slidesToShow: 3,
  // infinite={false}
  // slidesToScroll={3}
  centerMode: true,
  centerPadding: "170px",
  responsive: [
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        centerMode: false,
      },
    },
    {
      breakpoint: 850,
      settings: {
        slidesToShow: 2,
        centerMode: false,
      },
    },
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 3,
        centerMode: false,
        slidesToScroll: 3,
      },
    },
  ],
};

const WhatTheySay = ({ reference }) => {
  return (
    <div
      ref={reference}
      style={{ backgroundColor: "#f3f4f6" }}
      className="slide"
    >
      <div className="whatTheySay-topic">What they say</div>
      <Slider {...carouselProperties}>
        {multiData.map((item) => (
          <div style={{ padding: 4 }} className="card-crs">
            <Card
              sx={{ maxWidth: 345 }}
              style={{ margin: 20, backgroundColor: "#041149" }}
            >
              <CardActionArea>
                <CardMedia component="img" height="350" image={item.Image} />
                <CardContent>
                  <Typography
                    style={{ color: "white" }}
                    gutterBottom
                    variant="h5"
                    component="div"
                  >
                    {item.Name}
                  </Typography>
                  <Typography
                    style={{ color: "white" }}
                    variant="body2"
                    color="text.secondary"
                  >
                    {item.Disc}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default WhatTheySay;
