import React from "react";
import "./ErvaringsdeskundigePortaal.css";

const Frame = ({ children, desktop }) => (
    <div className={`frame${desktop ? ' desktop' : ''}`}>
        {children}
    </div>
);

const Ervaringsdeskundige = () => {
    return (
        <Frame desktop>
            <Frame>
                <div className="overlap">
                    <div className="overlap-group">
                        {/* ... your existing code for the 'overlap' frame */}
                    </div>
                </div>
            </Frame>

            <Frame>
                <div className="text-wrapper-5">Uw onderzoeken:</div>
                <div className="overlap-group-2">
                    {/* ... your existing code for the 'overlap-group-2' frame */}
                </div>
            </Frame>

            <Frame>
                <div className="rectangle-wrapper">
                    {/* ... your existing code for the 'rectangle-wrapper' frame */}
                </div>
            </Frame>

            <Frame>
                <div className="rectangle-8" />
                <div className="overlap-2">
                    {/* ... your existing code for the 'overlap-2' frame */}
                </div>
            </Frame>

            <Frame>
                <div className="div-wrapper">
                    {/* ... your existing code for the 'div-wrapper' frame */}
                </div>
            </Frame>

            <Frame>
                <div className="rectangle-13" />
                <div className="text-wrapper-18">Uw voltooide onderzoeken:</div>
            </Frame>
        </Frame>
    );
};

export default Ervaringsdeskundige;
