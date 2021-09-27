import React from 'react'
import ReactDOM from 'react-dom';
import "../styles/registrationForm.css";

const RegistrationForm = () => {
    // function form_next(){

    // }
    return (
        <div className="rigister_form">
            <h1>Registration Form</h1>
            <h6>*only for team praposal submission</h6>
            <div className="reg_form_container">
                <form action="" className="form_container">
                    <label htmlFor="university">University/Institute<span className="require_star">*</span></label><br />
                    <input type="text" name="university" className="form_label university" placeholder="Enter university or institute name" required /> <br />
                    <label htmlFor="team_name">Team Name<span className="require_star">*</span></label><br />
                    <input type="text" name="team_name" className="form_label team_name" placeholder="Enter team name" required /> <br />

                    <label htmlFor="number_of_members">No of Members<span className="require_star">*</span></label><br />
                    <select name="number_of_members" id="number_of_members" className="form_label" required> 
                        <option value="one">1</option>
                        <option value="two">2</option>
                        <option value="three">3</option>
                        <option value="four">4</option>
                        <option value="five">5</option>
                    </select>
                    <br />
                    <label htmlFor="project_overview">Project Overview<span className="require_star">*</span></label><br />
                    <input type="text" name="project_overview" className="form_label project_overview" placeholder="Enter project overview" required /> <br />

                    <label htmlFor="attach_proposal">Attach the Proposal here<span className="require_star">*</span></label><br />
                    <input type="file" name="attach_proposal" className="choose_file" required /><br />

                    <input type="button" className="btn_previous" value="Previous" onClick="form_next()" />
                    <input type="button" className="btn_next" value="Next" onClick="form_previous()" /><br />
                </form>
            </div>
        </div>
    )
}

export default RegistrationForm
