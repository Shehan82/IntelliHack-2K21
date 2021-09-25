import React, { Fragment, useState } from "react";

import "../styles/clock.css";
import Flip from "./Flip";

function Clock() {
  const countdown = new Date("Nov 20, 2021 00:00:00").getTime();
  const [count, setCount] = useState(60);
  const [sec, setsec] = useState(0);
  const [mins, setmins] = useState(0);
  const [hs, seths] = useState(0);
  const [ds, setds] = useState(0);
  setInterval(function () {
    var nowTime = new Date().getTime();
    var diff = countdown - nowTime;
    // console.log(diff);
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
      <div className="clock-container">
        <div className="clock-box-cnt">
          {ds < 10 ? (
            <div>
              <Flip value={0} />
            </div>
          ) : (
            <React.Fragment></React.Fragment>
          )}
          <Flip value={ds} />
        </div>

        <div className="clock-box-cnt">
          {hs < 10 ? (
            <div>
              <Flip value={0} />
            </div>
          ) : (
            <React.Fragment></React.Fragment>
          )}
          <Flip value={hs} />
        </div>

        <div className="clock-box-cnt">
          {mins < 10 ? (
            <div>
              <Flip value={0} />
            </div>
          ) : (
            <React.Fragment></React.Fragment>
          )}
          <Flip value={mins} />
        </div>

        <div className="clock-box-cnt">
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
