import React from 'react'
import "../styles/memberDetails.css";

const MemberDetails = () => {
    return (
        <div className="member_details">
            <h1>Member Details</h1>
            <div className="member_details_container">
                <form action="" className="form_container">

                    <label htmlFor="team_leader_name">Team Leader Name<span className="require_star">*</span></label><br />
                    <input type="text" name="team_leader_name" className="member_label team_leader_name" placeholder="Enter team leader name" required /> <br />
                    <label htmlFor="nic">NIC<span className="require_star">*</span></label><br />
                    <input type="text" name="nic" className="member_label nic" placeholder="Enter NIC" required /> <br />

                    <label htmlFor="contact_no">Contact No<span className="require_star">*</span></label><br />
                    <input type="text" name="contact_no" className="form_label contact_no" placeholder="Enter whatsapp number" required /> <br />
                    <label htmlFor="t_shirt_size">T-Shirt Size<span className="require_star">*</span></label><br />
                    <select name="t_shirt_size" id="t_shirt_size" className="member_label" required> 
                        <option value="xs">XS</option>
                        <option value="s">S</option>
                        <option value="m">M</option>
                        <option value="l">L</option>
                        <option value="xl">XL</option>
                        <option value="xxl">XXL</option>
                        <option value="xxxl">XXXL</option>
                    </select>
                    <br />
                    

                    <input type="button" className="btn_previous" value="Previous" onClick="form_next()" />
                    <input type="button" className="btn_next" value="Next" onClick="form_previous()" /><br />
                </form>
            </div>
        </div>
    )
}

export default MemberDetails
