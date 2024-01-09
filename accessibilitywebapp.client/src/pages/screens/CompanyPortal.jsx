import React from 'react';
import "@/pages/pages_css/CompanyPortal.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import NavbarComponent from "./components/NavbarComponent";

export const BedrijfsPortaal = () => {
    return (
        <Container className="BedrijfsPortaal">
        <div className="bedrijfs-portaal">
            <NavbarComponent />
            <div className="div">
                    <div className="rectangle" />
               
            <Row classname="rowstyle">
                        <Col xs={12} md={7} lg={4}>
                <div className="frame">
                    <div className="overlap">
                        <div className="vector" />
                        <div className="text-wrapper">Onderzoek app ING</div>
                    </div>
                    <div className="overlap-group">
                        <div className="img"/>
                        <div className="vector-2"/>
                    </div>
                    <div className="text-wrapper-2">Uw onderzoeken:</div>
                    <div className="overlap-group-2">
                        <div className="text-wrapper-3">Onderzoek website ING</div>
                        <div className="vector-3"/>
                    </div>
                    <div className="overlap-2">
                        <div className="vector-4"/>
                        <div className="text-wrapper-4">Onderzoek app ING</div>
                    </div>
                    <div className="overlap-3">
                        <div className="text-wrapper-4">Onderzoek app ING</div>
                        <div className="vector-5"/>
                    </div>
                    </div>
                        </Col>
                        <Col xs={12} md={7} lg={4}>
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
                    </Col>
                    </Row>
                </div>
                    </div>
            </Container>
    );
};
export default BedrijfsPortaal;

