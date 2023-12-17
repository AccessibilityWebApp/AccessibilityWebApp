import React from 'react';
import "@/pages/pages_css/Login.css";

export const Login = ({ handleToAanmeldClick, handleToPortalClick, handleToExpertPortal}) => {
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
                            <div className="rectangle2" onClick={handleToPortalClick}>Terug</div>
                            <div className="rectangle3" onClick={handleToExpertPortal}>Volgende</div>
                        </div>

                        <div className="frame-7">
                            <div className="text-wrapper-5">Wachtwoord vergeten?</div>
                        </div>

                        <div className="frame-8">
                            <div className="text-wrapper-4">Heb je nog geen account?</div>
                            <div className="aanmelden" onClick={handleToAanmeldClick}>Meld je hier aan</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;