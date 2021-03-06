import React, { useEffect, useState } from "react";
import "../styles/timeline.css";
import { ReactComponent as LogoIcon } from "../img/intelli.svg";
import timelineElements from "./timelineElements";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Timeline({ reference }) {
  let logoIconStyle = { background: "#fff", color: "#173b6962" };

  const [animate, setanimate] = useState(false);
  useEffect(() => {
    updateSize();
  }, []);

  function updateSize() {
    // console.log(window.innerWidth);
    // console.log(10);
    if (window.innerWidth < 1350) {
      setanimate(false);
    } else {
      setanimate(true);
    }
  }
  window.addEventListener("resize", updateSize);

  return (
    <div className="timeline-main-cnt" ref={reference}>
      <h2 className="title">How It Works</h2>
      <VerticalTimeline animate={animate}>
        {timelineElements.map((element) => {
          return (
            <VerticalTimelineElement
              contentStyle={{
                background: "#173b6962",
                color: "#fff",
              }}
              contentArrowStyle={{ borderRight: "7px solid  rgb(31, 38, 135)" }}
              key={element.id}
              dateClassName="date"
              date={element.date}
              iconStyle={logoIconStyle}
              icon={<LogoIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <p id="description">{element.description}</p>
            </VerticalTimelineElement>
          );
        })}
        <VerticalTimelineElement
          iconStyle={logoIconStyle}
          icon={<LogoIcon />}
        />
      </VerticalTimeline>
    </div>
  );
}
export default Timeline;
