import React from "react";
import "../styles/footer.css";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import CsLogo from "../img/csLogo.png";
import IntelliLogo from "../img/f1.png";

import {
  faFacebook,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Footer({ reference }) {
  var stt = () => {
    alert("sldkjfkjsdfs");
    window.open("http://google.com");
  };
  return (
    <div ref={reference} className="ft-cnt">
      <div className="row-1">
        <div className="contactUs-cnt">
          <div className="contactUs">Contact Us</div>
          <div className="our-email">ieeecsucsc@gmail.com</div>
          <div className="social-media-row">
            <FontAwesomeIcon
              style={{ cursor: "pointer" }}
              onClick={() => {
                window.open("https://www.facebook.com/IEEECSUCSC");
              }}
              size="3x"
              icon={faFacebook}
            />
            <FontAwesomeIcon
              style={{ cursor: "pointer" }}
              onClick={() => {
                window.open("https://www.linkedin.com/company/13686212");
              }}
              size="3x"
              icon={faLinkedin}
            />
            <FontAwesomeIcon
              style={{ cursor: "pointer" }}
              onClick={() => {
                window.open("https://www.instagram.com/ieee.cs.ucsc/");
              }}
              size="3x"
              icon={faInstagram}
            />
          </div>

          <div className="row2">
            <img className="csLogo" src={CsLogo} alt="" />
            <div className="logo-border"></div>
            <img className="csLogo" src={IntelliLogo} alt="" />
          </div>
        </div>
        <div className="card-cnt">
          {/* dfsdfdsf */}

          <Card
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
                  fontSize: 12,
                  marginTop: 10,
                  color: "white",
                  fontFamily: "Poppins, sans-serif",
                }}
                variant="body2"
                color="text.secondary"
              >
                shashinitharuka9@gmail.com
              </Typography>

              <Typography
                style={{
                  fontSize: 12,
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

          <Card
            style={{ margin: 20, backgroundColor: "#041149" }}
            sx={{ minWidth: 200, maxWidth: 320 }}
          >
            <CardMedia
              component="img"
              height="250"
              image="https://firebasestorage.googleapis.com/v0/b/intellihack.appspot.com/o/images921%2Fimgonline-com-ua-resize-EyddHUtOoo8fKYu.png?alt=media&token=8652f483-8196-4e2b-af2a-7684075b4f98"
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
                Kasunika Hansamali
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
                Event Secretary
              </Typography>
              <Typography
                style={{
                  fontSize: 12,
                  marginTop: 10,
                  color: "white",
                  fontFamily: "Poppins, sans-serif",
                }}
                variant="body2"
                color="text.secondary"
              >
                Kasunikahansamali.96@gmail.com
              </Typography>

              <Typography
                style={{
                  fontSize: 12,
                  marginTop: 5,
                  color: "white",
                  fontFamily: "Poppins, sans-serif",
                }}
                variant="body2"
                color="text.secondary"
              >
                0714632957
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
                Programming Head
              </Typography>
              <Typography
                style={{
                  fontSize: 12,
                  marginTop: 10,
                  color: "white",
                  fontFamily: "Poppins, sans-serif",
                }}
                variant="body2"
                color="text.secondary"
              >
                yohannayanajith40@gmail.com
              </Typography>

              <Typography
                style={{
                  fontSize: 12,
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

      <div className="row3">
        <div className="copyright">© Copyright IEEECS. All right reserved.</div>
      </div>
    </div>
  );
}

export default Footer;
