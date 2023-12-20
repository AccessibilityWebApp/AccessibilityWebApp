import PropTypes from "prop-types";
import "@/pages/pages_css/ExpertSignUp.css";
import ExpertSignUpController from '@/pages/pages_controllers/ExpertSignUp_Controller';

export const ExpertSignUp = ({ handleToLogin, handleToExpertPortal }) => {
    const {
        selectedTypesApproach,
        selectedTypesSoort,
        selectedTypesType,
        handleTypeChange,
        handleSoortChange,
        handleApproachChange,
        handleRemoveType,
        handleAgeChange,
        showAdditionalBoxes,
    } = ExpertSignUpController();

    return (
        <div className="expertsignup">
            <div className="div">
                <div className="frame" />
                <div className="frame-2" />
                <div className="frame-3">

                    <div className="frame-4">
                        <div className="text-wrapper">Aanmelden</div>
                        <div className="image-container"></div>
                    </div>

                    <input className="user" type="text" placeholder="Gebruikersnaam" />
                    <input className="pass" type="password" placeholder="Wachtwoord" />
                    <input className="letters" type="text" placeholder="Voorletter(s)" />
                    <input className="surname" type="text" placeholder="Achternaam" />
                    <input className="zip" type="text" placeholder="Postcode" />


                    <select className="age" onChange={handleAgeChange}>
                        <option value="" disabled selected hidden>Leeftijdsgroep</option>
                        <option value="18-">18-</option>
                        <option value="18-55">18-55</option>
                        <option value="55+">55+</option>
                    </select>

                    <input className="mail" type="text" placeholder="E-Mail" />
                    <input className="phone" type="text" placeholder="Telefoonnummer" />

                    <select className="approach" onChange={handleApproachChange}>
                        <option value="" disabled selected hidden>Voorkeur benadering</option>
                        <option value="Telefoon">Telefoon</option>
                        <option value="E-Mail">E-Mail</option>
                    </select>

                    {selectedTypesApproach.length > 0 && (
                        <div className="boxes-container">
                            {selectedTypesApproach.map((type, index) => (
                                <div key={index} className="box-frame">
                                    <div className="content-container">
                                        <span className="dot">&#8226;</span>
                                        <div className="type-text">{type}</div>
                                    </div>
                                    <button className="delete-button" onClick={() => handleRemoveType(index, 'approach')}>X</button>
                                </div>
                            ))}
                        </div>
                    )}

                    <select className="sort" onChange={handleSoortChange}>
                        <option value="" disabled selected hidden>Voorkeur soort onderzoek</option>
                        <option value="Visuele beperking">Visuele beperking</option>
                        <option value="Auditieve beperking">Auditieve beperking</option>
                        <option value="Motorische beperking">Motorische beperking</option>
                        <option value="Verstandelijke beperking">Verstandelijke beperking</option>
                        <option value="Digibeet">Digibeet</option>
                    </select>

                    {selectedTypesSoort.length > 0 && (
                        <div className="boxes-container">
                            {selectedTypesSoort.map((type, index) => (
                                <div key={index} className="box-frame">
                                    <div className="content-container">
                                        <span className="dot">&#8226;</span>
                                        <div className="type-text">{type}</div>
                                    </div>
                                    <button className="delete-button" onClick={() => handleRemoveType(index, 'soort')}>X</button>
                                </div>
                            ))}
                        </div>
                    )}

                    <select className="type" onChange={handleTypeChange}>
                        <option value="" disabled selected hidden>Voorkeur type onderzoek</option>
                        <option value="Interview">Interview</option>
                        <option value="Groepsgesprek">Groepsgesprek</option>
                        <option value="Online onderzoek">Online onderzoek</option>
                        <option value="Engelstalig onderzoek">Engelstalig onderzoek</option>
                    </select>

                    {selectedTypesType.length > 0 && (
                        <div className="boxes-container">
                            {selectedTypesType.map((type, index) => (
                                <div key={index} className="box-frame">
                                    <div className="content-container">
                                        <span className="dot">&#8226;</span>
                                        <div className="type-text">{type}</div>
                                    </div>
                                    <button className="delete-button" onClick={() => handleRemoveType(index, 'type')}>X</button>
                                </div>
                            ))}
                        </div>
                    )}

                    {showAdditionalBoxes && (
                        <>
                            <div className="voogd-container">
                                <div className="voogd">Voogd</div>
                            </div>
                            <input className="voorletters" type="text" placeholder="Voorletter(s)" />
                            <input className="achternaam" type="text" placeholder="Achternaam" />
                            <input className="telefoonnummer" type="text" placeholder="Telefoonnummer" />
                            <input className="email" type="text" placeholder="E-Mail" />
                        </>
                    )}

                    <div className="frame-5">
                        <input type="checkbox" className="checkbox" />
                        <div className="text-wrapper-4">Mogen commerciele partijen u benaderen?</div>
                    </div>


                    <div className="frame-6">
                        <div className="overlap-group">
                            <div className="text-wrapper-2">Heb je al een account?</div>
                            <div className="login" onClick={handleToLogin}>Log hier in</div>
                        </div>
                    </div>
                    <div className="frame-7">
                        <div className="rectangle2" onClick={handleToExpertPortal}>Volgende</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

ExpertSignUp.propTypes = {
    handleToLogin: PropTypes.func.isRequired,
    handleToExpertPortal: PropTypes.func.isRequired,
};

export default ExpertSignUp;