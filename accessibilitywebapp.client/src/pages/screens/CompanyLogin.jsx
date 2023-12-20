import PropTypes from "prop-types";
import "@/pages/pages_css/Login.css";

export const CompanyLogin = ({ handleToAanmeld, handleToPortal, handleToCompanyPortal }) => {
    return (
        <div className="inlogpagina">
            <div className="div">
                <div className="frame" />
                <div className="overlap-group">
                    <div className="frame-2" />
                    <div className="frame-3" />
                </div>

                <div className="LoginFrame">
                    <div className="frame-4">
                        <div className="text-wrapper">Log in</div>
                        <div className="overlap-wrapper">
                            <input
                                type="text"
                                className="entry-box"
                                placeholder="Gebruiker"
                            />
                        </div>

                        <div className="group">
                            <input
                                type="password"
                                className="entry-box"
                                placeholder="Wachtwoord"
                            />
                        </div>

                        <div className="frame-5">
                            <input type="checkbox" className="checkbox" />
                            <div className="text-wrapper-2">Onthoud mij</div>
                        </div>

                        <div className="frame-6">
                            <div className="rectangle2" onClick={handleToPortal}>Terug</div>
                            <div className="rectangle3" onClick={handleToCompanyPortal}>Volgende</div>
                        </div>

                        <div className="frame-7">
                            <div className="text-wrapper-5">Wachtwoord vergeten?</div>
                        </div>

                        <div className="frame-8">
                            <div className="text-wrapper-4">Heb je nog geen account?</div>
                            <div className="aanmelden" onClick={handleToAanmeld}>Meld je hier aan</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

CompanyLogin.propTypes = {
    handleToAanmeld: PropTypes.func.isRequired,
    handleToPortal: PropTypes.func.isRequired,
    handleToExpertPortal: PropTypes.func.isRequired,
};

export default CompanyLogin;