import PropTypes from "prop-types";
import "@/pages/pages_css/AssignmentCreator.css";

const AssignmentCreator = () => {
    return (
        <div className="assignment_creator">
            <div className="assignment_options">
                <input type="text" placeholder="Titel" className="assignment_textbox" />
                <input type="text" placeholder="Beschrijf je opdracht..." className="assignment_textbox2" />
                <input type="text" placeholder="Locatie" className="assignment_textbox" />
                <input type="text" placeholder="Beloning" className="assignment_textbox" />

                <div className="green-circle" />
                <div className="blue-circle" />

                <select className="beperking_opties">
                    <option value="Beperking(en)">Beperkingen</option>
                    <option value="Beperking1">Blind</option>
                    <option value="Beperking2">Doof</option>
                </select>
            </div>
        </div>
    );
};

AssignmentCreator.propTypes = {
    handlePortalButtonClick: PropTypes.func.isRequired,
};

export default AssignmentCreator;
