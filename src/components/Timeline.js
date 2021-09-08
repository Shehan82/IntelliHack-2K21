import React from "react";
import "../styles/timeline.css"
import {ReactComponent as LogoIcon} from "../logo.svg";
import timelineElements from "./timelineElements";

import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";


function Timeline(){
    let logoIconStyle = { background: "#06D6A0" };

    return(
        <div>
            <h2 className="title">Timeline</h2>
            <VerticalTimeline>
                {timelineElements.map((element)=>{
                    return(
                        <VerticalTimelineElement
                        key={element.id}
                        dateClassName="date"
                        date={element.date}
                        iconStyle = {logoIconStyle}
                        icon={<LogoIcon />}
                        >
                        <h3 className="vertical-timeline-element-title">
                        {element.title}
                        </h3>
                        <p id="description">{element.description}</p>
                        </VerticalTimelineElement>
                    )
                })}
            </VerticalTimeline>
        </div>
    )

}
export default Timeline;