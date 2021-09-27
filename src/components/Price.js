import React from "react";
import First_Place from "../img/first_place.png";
import Second_Place from "../img/second_place.png";
import Third_Place from "../img/third_place.png";
import Titles from "../img/title2.png";
import "../styles/price.css";
import Flip from "react-reveal/Flip";
import Roll from "react-reveal/Roll";
import Slide from "react-reveal/Slide";
import Wobble from "react-reveal/Wobble";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";

const Price = ({ reference }) => {
  return (
    <div ref={reference} className="prizes-row">
      <div className="header-name">
        <div>Prices</div>
      </div>
      <div className="winners-row">
        <Flip right>
          <div className="third-place">
            <h1>Third Place</h1>
            <div className="third_card">
              <img
                className="third-card-img-top"
                id="image1"
                src={Third_Place}
                alt="third_place"
              />
            </div>
            <div className="third_card-detail">Rs. 25000</div>
          </div>
        </Flip>

        <Flip left>
          <div className="first-place">
            <h1>First Place</h1>
            <div className="third_card">
              <img
                className="third-card-img-top"
                src={First_Place}
                alt="first_place"
              />
            </div>
            <div className="second_card-detail">Rs. 75000</div>
          </div>
        </Flip>

        {/* #041149 */}

        <Flip right>
          <div className="second-place">
            <h1>Second Place</h1>
            <div className="third_card">
              <img
                className="third-card-img-top"
                src={Second_Place}
                alt="second_place"
              />
            </div>
            <div className="first_card-detail">Rs. 50000</div>
          </div>
        </Flip>
      </div>
      <div className="header-name2">{/* <div>Titles</div> */}</div>
      <div className="titles-row-master">
        {/* <h1>Title row</h1> */}

        <Fade top>
          <div className="intellihack-master-image">
            <img
              className="title-card-img-top1"
              src={Titles}
              alt="intellihack-master"
            />
            <div class="title-card-img-top1-text">
              <div>
                INTELLIHACK'21
                <br />
                MASTER
              </div>
            </div>
          </div>
        </Fade>

        <div className="intellihack-master-text">
          <div className="intellihack-master">
            Machine Learning related tasks will be posted on our social media
            platforms on a weekly basis, which is an open event for any
            registered contestant. A leaderboard will be maintained throughout
            the competing period and winners will be awarded with the title of
            “IntelliHack Master” and valuable prizes.
          </div>
        </div>
      </div>

      <div className="titles-row-most-popular">
        <Fade bottom>
          <div className="most-popular-team-image">
            <img
              className="title-card-img-top1"
              src={Titles}
              alt="intellihack-master"
            />
            <div class="title-card-img-top2-text">
              <div>
                MOST POPULAR
                <br />
                TEAM
              </div>
            </div>
          </div>
        </Fade>
        <div className="intellihack-most-popular-text">
          <div className="most-popular-team">
            The top ten finalists will present their applications in the form of
            a short video or a creative post, which will be shared on our social
            media platforms. The team that receives the highest score based on
            social media analytics (Reacts, Shares), will be selected as the
            "Most Popular Team" and prizes will be awarded.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
