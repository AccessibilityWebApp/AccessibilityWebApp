import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavbarComponent() {
    const [showLogoutModal, setShowLogoutModal] = useState(false);

    const handleLogout = () => {
        setShowLogoutModal(false);
    };

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="/icons/logo_small.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        Stichting Accesibility
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Profiel</Nav.Link>
                            <Nav.Link onClick={() => setShowLogoutModal(true)}>Log uit</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Modal show={showLogoutModal} onHide={() => setShowLogoutModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Bevestiging Uitloggen</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Weet je zeker dat je wilt uitloggen?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowLogoutModal(false)}>
                        Annuleren
                    </Button>
                    <Button variant="primary" onClick={handleLogout}>
                        Uitloggen
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default NavbarComponent;
