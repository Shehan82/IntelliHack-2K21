import React from "react";
import First_Place from "../img/first_place.png";
import Second_Place from "../img/second_place.png";
import Third_Place from "../img/third_place.png";
import Titles from "../img/title2.png";
import "../styles/price.css";

const Price = () => {
  return (
    <div className="prizes-row">
      <div className="header-name">
        <div>Prices</div>
      </div>
      <div className="winners-row">
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
      </div>
      <div className="header-name2">
        <div>Titles</div>
      </div>
      <div className="titles-row-master">
        {/* <h1>Title row</h1> */}
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
        <div className="intellihack-master-text">
          <div className="intellihack-master">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id enim
            asperiores nemo nam? Facere obcaecati, nesciunt ex, atque tempore,
            quasi omnis reprehenderit totam consequuntur non ullam natus.
            Dolorum a exercitationem eius quidem accusamus? Aspernatur in
            inventore quis natus voluptates minus sint. Repudiandae asperiores,
            eaque dolorum reiciendis doloremque dolore debitis ipsum atque iure
            impedit at aut!
          </div>
        </div>
      </div>

      <div className="titles-row-most-popular">
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
        <div className="intellihack-most-popular-text">
          <div className="most-popular-team">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id enim
            asperiores nemo nam? Facere obcaecati, nesciunt ex, atque tempore,
            quasi omnis reprehenderit totam consequuntur non ullam natus.
            Dolorum a exercitationem eius quidem accusamus? Aspernatur in
            inventore quis natus voluptates minus sint. Repudiandae asperiores,
            eaque dolorum reiciendis doloremque dolore debitis ipsum atque iure
            impedit at aut!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
