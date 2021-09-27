import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
 import "slick-carousel/slick/slick-theme.css";
import "../styles/whatSay.css";
import {  multiData } from "./whatSayData";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { Card, CardActionArea, CardContent ,CardMedia , Typography   } from "@material-ui/core";
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
      breakpoint: 426,
      settings: {
        slidesToShow: 1,
        centerMode: false,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 3,
        centerMode: false,
      },
    },
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 4,
        centerMode: false,
        slidesToScroll: 2,
      },
    },
  ],
};

const WhatTheySay = () => {
  return (
    <div style={{ margin: "30px" }} className="slide">
      <h1>Basic carousel</h1>
    
      <Slider {...carouselProperties}>
        {multiData.map((item) => (
        <div style={{padding:4}}>
        <Card sx={{ maxWidth: 345}}style={{margin:10}}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={item.Image}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.Name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
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
