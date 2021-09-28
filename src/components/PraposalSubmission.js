import React from "react";
import "../styles/praposalSubmission.css";

function PraposalSubmission({ reference, openPopUp }) {
  return (
    <div ref={reference} className="ps-main">
      <div className="ps-title">Praposals Submissions are open now!</div>
      <div className="ps-sub-title">Make sure to apply before 2021-08-06</div>
      <div className="ps-btn-cnt">
        <div className="ps-btn">Rules & Regulations</div>
        <div onClick={openPopUp} className="ps-btn">
          Registration
        </div>
      </div>
    </div>
  );
}

export default PraposalSubmission;
