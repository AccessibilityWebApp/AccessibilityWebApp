// AssignmentCreator.jsx
import React from "react";
import PropTypes from "prop-types";
import "@/pages/pages_css/AssignmentCreator.css";

const AssignmentCreator = ({ handlePortalButtonClick }) => {
    return (
        <div className="assignment-creator">
            <div className="centered-container">
                <input type="text" placeholder="Textbox 1" className="centered-textbox" />
                <input type="text" placeholder="Textbox 2" className="centered-textbox second-textbox" />
                <input type="text" placeholder="Textbox 3" className="centered-textbox" />
                <input type="text" placeholder="Textbox 4" className="centered-textbox" />

                {/* Replace the last input with a dropdown list */}
                <select className="centered-dropdown">
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>
            </div>
        </div>
    );
};

AssignmentCreator.propTypes = {
    handlePortalButtonClick: PropTypes.func.isRequired,
};

export default AssignmentCreator;
