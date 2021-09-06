import React from "react";
import "../styles/navbar.css";

function NavBar(props) {
  console.log(props.display);
  return (
    <div
      className={props.display ? "navbar-cnt navbar-display" : "navbar-cnt"}
    ></div>
  );
}

export default NavBar;
