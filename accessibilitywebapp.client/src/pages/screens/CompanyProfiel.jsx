import React, { useState } from "react";
import { Container, Image, Form, FormControl, Button, Modal } from 'react-bootstrap';
import PropTypes from "prop-types";
import NavbarComponent from "./components/NavbarComponent";


export const CompanyProfiel = ({ handleToExpertPortal }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    return (
        <body className="achtergrond">
            <Container fluid id="profile-form" className="w-50 p-5">
            <NavbarComponent portalType="company" />

            <div className="text-center">
                <Image src="./icons/KPN.png" rounded />
            </div>

                <Form className="mt-5">
                <Form.Group controlId="formProfileName">
                    <Form.Label>Gebruikersnaam</Form.Label>
                    <FormControl
                        type="text"
                        placeholder="KPN"
                    />
                </Form.Group>

                <Form.Group controlId="formProfileName">
                    <Form.Label>Bedrijfsnaam</Form.Label>
                    <FormControl
                        type="text"
                        placeholder="KPN"
                    />
                </Form.Group>

                <Form.Group controlId="formProfileSurname">
                    <Form.Label>Beschrijving</Form.Label>
                    <FormControl
                        type="text"
                        placeholder="Internet provider"
                    />
                </Form.Group>

                <Form.Group controlId="formProfilePostalcode">
                    <Form.Label>Locatie bedrijf</Form.Label>
                    <FormControl
                        type="text"
                        placeholder="Urk"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formProfileEmail">
                    <Form.Label>Link bedrijf</Form.Label>
                    <FormControl
                        type="email"
                        placeholder="https://www.kpn.com/"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formProfilePhoneNumber">
                    <Form.Label>KVK-nummer</Form.Label>
                    <FormControl
                        type="text"
                        placeholder="76394657"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formProfilePhoneNumber">
                    <Form.Label>Contactpersoon</Form.Label>
                    <FormControl className="mb-3"
                        type="text"
                        placeholder="Mohamed Rahim"
                    />
                    <FormControl className="mb-3"
                        type="text"
                        placeholder="06420691234"
                    />
                    <FormControl className="mb-3"
                        type="text"
                        placeholder="Mohamed@KPN.nl"
                    />
                </Form.Group>

                <Button variant="success" type="submit" className="Knop me-3">
                    Bevestig
                </Button>

                <Button variant="danger" type="submit" className="Knop">
                    Verwijder Account
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Verwijder Account</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Weet u zeker dat u uw account wilt verwijderen? Deze actie kan niet ongedaan worden gemaakt.
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Annuleren
                        </Button>
                        <Button variant="danger" onClick={handleClose}>
                            Verwijderen
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Form>
        </Container>
        </body >
    );
};

CompanyProfiel.propTypes = {
    handleToExpertPortal: PropTypes.func.isRequired,
};

export default CompanyProfiel;