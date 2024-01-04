import "@/pages/pages_css/CompanyPortal.css";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

export const BedrijfsPortaal = () => {
    return (
        <Container className="BedrijfsPortaal">
        <div className="bedrijfs-portaal">
            <div className="div">
                    <img className="rectangle" alt="Rectangle" src="rectangle-50.svg" />
                </div>
                    </div>
            <Row classname="rowstyle">
                <Col xs={12} md={7} lg={4}>
                <div className="frame">
                    <div className="overlap">
                        <img className="vector" alt="Vector" src="vector-20.svg" />
                        <div className="text-wrapper">Onderzoek app ING</div>
                    </div>
                    <div className="overlap-group">
                        <img className="img" alt="Vector" src="vector-15.svg" />
                        <img className="vector-2" alt="Vector" src="vector-17.svg" />
                    </div>
                    <div className="text-wrapper-2">Uw onderzoeken:</div>
                    <div className="overlap-group-2">
                        <div className="text-wrapper-3">Onderzoek website ING</div>
                        <img className="vector-3" alt="Vector" src="vector-18.svg" />
                    </div>
                    <div className="overlap-2">
                        <img className="vector-4" alt="Vector" src="vector-19.svg" />
                        <div className="text-wrapper-4">Onderzoek app ING</div>
                    </div>
                    <div className="overlap-3">
                        <div className="text-wrapper-4">Onderzoek app ING</div>
                        <img className="vector-5" alt="Vector" src="vector-21.svg" />
                    </div>
                    </div>
                </Colxs>
                <div className="frame-2">
                    <div className="text-wrapper-5">Log uit</div>
                    <div className="text-wrapper-6">Profiel</div>
                    <div className="overlap-4">
                        <div className="rectangle-2" />
                        <div className="text-wrapper-7">Home</div>
                    </div>
                    <div className="line"></div>
                    <img className="image" alt="Image" src="image-9.png" />
                </div>
                </Row>
            </Container>
    );
};
export default BedrijfsPortaal;

