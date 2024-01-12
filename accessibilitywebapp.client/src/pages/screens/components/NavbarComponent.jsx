import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarComponent({ portalType }) {
    const homeLink = `/${portalType}_portal`; // home link based on portalType

    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" fixed="top">
            <Navbar.Brand>
                <img
                    alt="Logo van stichting accesibility"
                    src="/icons/logo_small.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                Stichting Accesibility
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href={`${portalType}_portal`}>Home</Nav.Link>
                    <Nav.Link href={`${portalType}Profiel`}>Profiel</Nav.Link>
                    <Nav.Link href={`portal`}>Log Uit</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavbarComponent;