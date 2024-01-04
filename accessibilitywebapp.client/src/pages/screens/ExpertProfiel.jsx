import "@/pages/pages_css/ExpertProfiel.css";
import PropTypes from "prop-types";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

export const ExpertProfiel = ({handleToExpertPortal}) => {
    return (
        <Container className="profiel">
            <div className="div">

                <div className="overlap">
                    <div className="rectangle" />
                    <div className="text-wrapper">IsoCan070</div>
                    <div className="vector" />
                </div>

                

                <div className="overlap-2">
                    
                    
                    <div className="group-2">
                        <div className="div-2">
                            <div className="text-wrapper-4">M.</div>
                        </div>
                        <div className="overlap-3">
                            <div className="text-wrapper-5">4206GG</div>
                        </div>
                        <div className="overlap-4">
                            <div className="text-wrapper-6">MGunus@gmail.com</div>
                        </div>
                        <div className="overlap-5">
                            <div className="div-2" />
                            <div className="text-wrapper-7">18-35</div>
                        </div>
                        <div className="overlap-6">
                            <div className="text-wrapper-8">Gunus</div>
                        </div>
                        <div className="overlap-7">
                            <div className="div-2" />
                            <div className="text-wrapper-9">06 12345678</div>
                        </div>
                        <div className="overlap-8">
                            <div className="div-2" />
                            <div className="text-wrapper-10">Doof</div>
                        </div>
                        <div className="overlap-9">
                            <div className="div-2" />
                            <div className="text-wrapper-11">Telefonisch</div>
                        </div>
                        <div className="overlap-10">
                            <div className="text-wrapper-12">Online</div>
                        </div>
                    </div>

                    <div className="text-wrapper-13">Wachtwoord wijzigen</div>

                    <div className="rectangle-2" />
                    <div className="text-wrapper-2">Verwijder account</div>

                    <div className="group">
                        <div className="div-wrapper">
                            <div className="text-wrapper-3" onClick={handleToExpertPortal}>Opslaan</div>
                        </div>
                    </div> 

                </div>

                <div className="overlap-11">
                    <div className="text-wrapper-14">Mijn gegevens</div>
                    <div className="vector-2" />
                </div>

                <div className="overlap-12">
                    <div className="vector-3" />
                    <div className="logo" />
                </div>

                <div className="overlap-13">
                    <div className="text-wrapper-15">Log uit</div>                    
                </div>

                <div className="overlap-14">
                    <div className="text-wrapper-16">Home</div>                   
                </div>

                <div className="overlap-15">                    
                    <div className="rectangle-3" />
                    <div className="text-wrapper-18">Profiel</div>
                </div>

                <div className="line" />
                <div className="image-2" />
                <div className="ellipse" />
                <div className="ellipse-2" />
            </div>
        </Container>
    );
};

ExpertProfiel.propTypes = {
    handleToExpertPortal: PropTypes.func.isRequired,
};

export default ExpertProfiel;