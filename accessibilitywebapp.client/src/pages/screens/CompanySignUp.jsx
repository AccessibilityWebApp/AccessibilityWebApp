import PropTypes from "prop-types";
import "@/pages/pages_css/CompanySignUp.css";

export const CompanySignUp = ({ handleToLogin }) => {
    return (
        <div className="aanmeldingspagina">
            <div className="div">
                <div className="green-circle" />
                <div className="blue-circle" />
                <div className="whole">
                    <div className="form">
                        <input type="text" className="mail" placeholder="E-Mail" />
                        <input type="text" className="phone" placeholder="Telefoonnummer" />
                        <input type="text" className="name" placeholder="Naam" />
                        <div className="contact">Contact Persoon:</div>
                        <input type="text" className="kvk" placeholder="KVK-nummer" />
                        <input type="text" className="link" placeholder="Link" />
                        <input type="text" className="location" placeholder="Locatie" />
                        <textarea className="desc" placeholder="Beschrijf het bedrijf..."></textarea>
                        <input type="text" className="name-2" placeholder="Naam" />
                        <input type="password" className="password" placeholder="Wachtwoord" />
                        <input type="text" className="user" placeholder="Gebruikersnaam" />
                    </div>
                    <div className="buttons">
                        <div className="next">Volgende</div>
                    </div>
                    <div className="logo-title">
                        <div className="title">Aanmelden</div>
                        <div className="logo" />
                    </div>
                    <div className="login">
                        <div className="account">Heb je al een account?</div>
                        <div className="loginbutton" onClick={handleToLogin}>Log hier in</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

CompanySignUp.propTypes = {
    handleToLogin: PropTypes.func.isRequired,
};

export default CompanySignUp;