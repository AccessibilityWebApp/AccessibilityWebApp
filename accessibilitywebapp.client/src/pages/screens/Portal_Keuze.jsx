// Portaalkeuze.jsx
import React from "react";
import "@/pages/pages_css/Portal_Keuze.css";

const Portaalkeuze = ({ handlePortalButtonClick }) => {
    return (
        <div className="portaalkeuze">
            <div className="overlap-wrapper">
                <div className="overlap">
                    <div className="whole">
                        <div className="buttons">
                            <div className="company" onClick={() => handlePortalButtonClick('company')}>
                                <div className="title">Bedrijf</div>
                                <div className="company-icon" />
                                <div className="company-desc">Het bedrijfsportaal is het portaal voor de bedrijfen die de onderzoeken maken.</div>
                            </div>
                            <div className="experts" onClick={() => handlePortalButtonClick('expert')}>
                                <div className="text-wrapper">Ervaringsdeskundige</div>
                                <div className="people-icon" />
                                <div className="expert-desc">Het ervaringsdeskundigeportaal is het portaal voor deelnemers met een beperking.</div>
                            </div>
                        </div>
                        <div className="logo-and-title">
                            <div className="overlap-group">
                                <div className="logo" />
                                <div className="div">Kies uw portaal:</div>
                            </div>
                        </div>
                    </div>
                    <div className="circle-blue" />
                    <div className="circle-green" />
                </div>
            </div>
        </div>
    );
};

export default Portaalkeuze;
