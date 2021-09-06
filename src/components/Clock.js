import React, { Fragment, useState } from "react";

import "../styles/clock.css";
import Flip from "./Flip";

function Clock() {
  const countdown = new Date("Sep 20, 2021 00:00:00").getTime();
  const [count, setCount] = useState(60);
  const [sec, setsec] = useState(0);
  const [mins, setmins] = useState(0);
  const [hs, seths] = useState(0);
  const [ds, setds] = useState(0);
  setInterval(function () {
    var nowTime = new Date().getTime();
    var diff = countdown - nowTime;
    console.log(diff);
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    setds(days);
    seths(hours);
    setmins(minutes);
    setCount(seconds);
    // console.log(hours + " " + minutes + " " + seconds);
  }, 1000);

  return (
    <div className="App">
      <div style={{ margin: "1em", display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex" }}>
          {ds < 10 ? (
            <div>
              <Flip value={0} />
            </div>
          ) : (
            <React.Fragment></React.Fragment>
          )}
          <Flip value={ds} />
        </div>

        <div style={{ margin: "10px" }}></div>
        <div style={{ display: "flex" }}>
          {hs < 10 ? (
            <div>
              <Flip value={0} />
            </div>
          ) : (
            <React.Fragment></React.Fragment>
          )}
          <Flip value={hs} />
        </div>

        <div style={{ margin: "10px" }}></div>

        <div style={{ display: "flex" }}>
          {mins < 10 ? (
            <div>
              <Flip value={0} />
            </div>
          ) : (
            <React.Fragment></React.Fragment>
          )}
          <Flip value={mins} />
        </div>

        <div style={{ margin: "10px" }}></div>

        <div style={{ display: "flex" }}>
          {count < 10 ? (
            <div>
              <Flip value={0} />
            </div>
          ) : (
            <React.Fragment></React.Fragment>
          )}
          <Flip value={count} />
        </div>
      </div>
    </div>
  );
}

export default Clock;
