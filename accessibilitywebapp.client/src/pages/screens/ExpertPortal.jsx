import React from 'react';
import "@/pages/pages_css/ExpertPortal.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import NavbarComponent from "./components/NavbarComponent";

export const Ervaringsdeskundige = () => {
    return (
        <Container className="ervaringsdeskundige">

            <NavbarComponent />

            <Row className="rowstyle">
                <Col xs={12} md={7} lg={4}>
                    <div className="frame-2">
                        <header className="text-wrapper-5">Uw onderzoeken:</header>
                        <div className="overlap-group-2">
                            <div className="rectangle-2" />
                            <header className="text-wrapper-8">Onderzoek KPN</header>
                            <div className="rectangle-3" />
                            <header className="text-wrapper-9">Onderzoek ING</header>
                            <div className="rectangle-4" />
                            <div className="rectangle-5" />
                            <header className="text-wrapper-11">Onderzoek Hema</header>
                        </div>
                        <div className="rectangle-wrapper">
                            <div className="rectangle-6" />
                        </div>
                        <div className="rectangle-7" />
                    </div>
                </Col>
                    <Col xs={12} md={7} lg={4}>
                        <div className="parent-of-frame-3">
                        <div className="frame-3">
                            <header className="text-wrapper-18">Uw voltooide onderzoeken:</header>
                        <div className="overlap-2">
                            <div className="rectangle-8" />
                            <header className="text-wrapper-14">Onderzoek KPN</header>
                            <div className="rectangle-9" />
                            <header className="text-wrapper-15">Onderzoek ING</header>
                            <div className="rectangle-10" />
                            <div className="rectangle-11" />
                            <header className="text-wrapper-17">Onderzoek Hema</header>
                        </div>
                        <div className="div-wrapper">
                            <div className="rectangle-6" />
                        </div>
                        <div className="rectangle-12" />
                            </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Ervaringsdeskundige;
