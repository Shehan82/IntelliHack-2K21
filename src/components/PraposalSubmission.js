import React from "react";
import "../styles/praposalSubmission.css";

function PraposalSubmission({ reference, openPopUp }) {
  return (
    <div ref={reference} className="ps-main">
      <div className="ps-title">Proposal Submissions will open soon!</div>
      <div className="ps-sub-title">
        You can download
        {/* Data set{" "}
        <span
          // onClick={() => {
          //   window.open("https://www.facebook.com/IEEECSUCSC");
          // }}
          style={{ cursor: "pointer", color: "grey" }}
        >
          here
        </span>{" "} */}
      </div>
      <div className="ps-sub-title">
        Proposal template{" "}
        <span
          onClick={() => {
            window.open("https://www.facebook.com/IEEECSUCSC");
          }}
          style={{ cursor: "pointer", color: "grey" }}
        >
          here
        </span>
      </div>
      <div className="ps-sub-title">
        Booklet{" "}
        <span
          onClick={() => {
            window.open(
              "https://drive.google.com/file/d/1rJMSGwblMO0PpGUQgVB_uLccH2J4wvDM/view?usp=sharing"
            );
          }}
          style={{ cursor: "pointer", color: "green" }}
        >
          here
        </span>
      </div>

      <div className="ps-btn-cnt">
        {/* <div className="ps-btn1">Rules & Regulations</div> */}
        <div
          onClick={() => {
            window.open(
              "https://drive.google.com/file/d/1EZ8NSIBMG1u1FnzNtGcvrSL6nZ2WcckJ/view?usp=sharing"
            );
          }}
          className="ps-btn1"
        >
          Rules & Regulations
        </div>
        <div onClick={openPopUp} className="ps-btn">
          Registration
        </div>

        {/* <div className="ps-btn">Registration</div> */}
      </div>
    </div>
  );
}

export default PraposalSubmission;
