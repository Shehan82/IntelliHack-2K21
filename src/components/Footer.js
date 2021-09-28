import React from "react";
import "../styles/footer.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import CsLogo from "../img/csLogo.png";

import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  return (
    <div className="ft-cnt">
      <div className="row-1">
        <div className="contactUs-cnt">
          <div className="contactUs">Contact Us</div>
          <div className="our-email">ucscieecschapter@gmail.com</div>
          <div className="social-media-row">
            <FacebookIcon sx={{ fontSize: 50 }} />
            <LinkedInIcon sx={{ fontSize: 50 }} />
            <InstagramIcon sx={{ fontSize: 50 }} />
          </div>
        </div>
        <div className="card-cnt">
          <Card
            style={{ margin: 20, backgroundColor: "#041149" }}
            sx={{ minWidth: 200, maxWidth: 320 }}
          >
            <CardMedia
              component="img"
              height="250"
              image="https://firebasestorage.googleapis.com/v0/b/intellihack.appspot.com/o/images921%2Fresize-1632865386424723758manthi.jpg?alt=media&token=1a1c8f32-c05e-4c7e-957c-ab210dd61b98"
              alt="green iguana"
            />
            <CardContent>
              <Typography
                style={{
                  fontSize: 20,

                  color: "white",
                  fontFamily: "Poppins, sans-serif",
                }}
                gutterBottom
                variant="h5"
                component="div"
              >
                Manthi Nimaya
              </Typography>

              <Typography
                style={{
                  fontSize: 14,

                  color: "white",
                  fontFamily: "Poppins, sans-serif",
                }}
                variant="body2"
                color="text.secondary"
              >
                Chair Person
              </Typography>
              <Typography
                style={{
                  fontSize: 14,
                  marginTop: 10,
                  color: "white",
                  fontFamily: "Poppins, sans-serif",
                }}
                variant="body2"
                color="text.secondary"
              >
                manthinimaya@gmail.com
              </Typography>

              <Typography
                style={{
                  fontSize: 14,
                  marginTop: 5,
                  color: "white",
                  fontFamily: "Poppins, sans-serif",
                }}
                variant="body2"
                color="text.secondary"
              >
                0764503326
              </Typography>
            </CardContent>
          </Card>
          {/* dfsdfdsf */}

          <Card
            className="card-ftr"
            style={{ margin: 20, backgroundColor: "#041149" }}
            sx={{ minWidth: 200, maxWidth: 320 }}
          >
            <CardMedia
              component="img"
              height="250"
              image="https://firebasestorage.googleapis.com/v0/b/intellihack.appspot.com/o/images921%2Fresize-1632865453397186763shashini.jpg?alt=media&token=93fdcdd6-ad80-4565-91e9-12cd9d158ea0"
              alt="green iguana"
            />
            <CardContent>
              <Typography
                style={{
                  fontSize: 20,

                  color: "white",
                  fontFamily: "Poppins, sans-serif",
                }}
                gutterBottom
                variant="h5"
                component="div"
              >
                Shashini Peramuna
              </Typography>

              <Typography
                style={{
                  fontSize: 14,

                  color: "white",
                  fontFamily: "Poppins, sans-serif",
                }}
                variant="body2"
                color="text.secondary"
              >
                Event Chair
              </Typography>
              <Typography
                style={{
                  fontSize: 14,
                  marginTop: 10,
                  color: "white",
                  fontFamily: "Poppins, sans-serif",
                }}
                variant="body2"
                color="text.secondary"
              >
                shashiniperamuna@gmail.com
              </Typography>

              <Typography
                style={{
                  fontSize: 14,
                  marginTop: 5,
                  color: "white",
                  fontFamily: "Poppins, sans-serif",
                }}
                variant="body2"
                color="text.secondary"
              >
                0713989181
              </Typography>
            </CardContent>
          </Card>

          {/* dfdfsfsd */}

          <Card
            style={{ margin: 20, backgroundColor: "#041149" }}
            sx={{ minWidth: 200, maxWidth: 320 }}
          >
            <CardMedia
              component="img"
              height="250"
              image="https://firebasestorage.googleapis.com/v0/b/intellihack.appspot.com/o/images921%2Fyohan.png?alt=media&token=cd9948f2-ea98-41d5-a9ab-3661635f7b82"
              alt="green iguana"
            />
            <CardContent>
              <Typography
                style={{
                  fontSize: 20,

                  color: "white",
                  fontFamily: "Poppins, sans-serif",
                }}
                gutterBottom
                variant="h5"
                component="div"
              >
                Yohan Nayanajith
              </Typography>

              <Typography
                style={{
                  fontSize: 14,

                  color: "white",
                  fontFamily: "Poppins, sans-serif",
                }}
                variant="body2"
                color="text.secondary"
              >
                Programming head
              </Typography>
              <Typography
                style={{
                  fontSize: 14,
                  marginTop: 10,
                  color: "white",
                  fontFamily: "Poppins, sans-serif",
                }}
                variant="body2"
                color="text.secondary"
              >
                yohannayanajitj@gmail.com
              </Typography>

              <Typography
                style={{
                  fontSize: 14,
                  marginTop: 5,
                  color: "white",
                  fontFamily: "Poppins, sans-serif",
                }}
                variant="body2"
                color="text.secondary"
              >
                0758657450
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="row2">
        <img className="csLogo" src={CsLogo} alt="" />
      </div>
    </div>
  );
}

export default Footer;
