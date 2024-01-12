import React, { useState } from "react";
import {
    Button,
    Form,
    FormControl,
    Row,
    Col,
    Container,
} from "react-bootstrap";
import PropTypes from "prop-types";
import "@/pages/pages_css/ExpertSignUp.css";
import CompanySignUpController from "@/pages/pages_controllers/ExpertSignUp_Controller";

export const CompanySignUp = ({ handleToLogin, handleToExpertPortal }) => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };


    const {
        selectedTypesApproach,
        selectedTypesSoort,
        selectedTypesType,
        handleTypeChange,
        handleSoortChange,
        handleApproachChange,
        handleRemoveType,
        handleAgeChange,
        showAdditionalBoxes,
    } = CompanySignUpController();

    return (
        <body className="achtergrond">
            <Container fluid id="signup-form" className="w-50 p-5">
                <h1>Account aanmaken</h1>
                <Form
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                >
                    <Row>
                        <Form.Group as={Col} controlId="username">
                            <Form.Label>Gebruikersnaam:</Form.Label>
                            <Form.Control type="text" name="username" required />
                            <Form.Control.Feedback type="invalid">
                                Vul uw gebruikersnaam in.
                            </Form.Control.Feedback>
                            <Form.Control.Feedback type="valid">
                                Ziet er goed uit!
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} controlId="password">
                            <Form.Label>Wachtwoord:</Form.Label>
                            <Form.Control type="password" name="password" required />
                            <Form.Control.Feedback type="invalid">
                                Vul uw wachtwoord in.
                            </Form.Control.Feedback>
                            <Form.Control.Feedback type="valid">
                                Ziet er goed uit!
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group as={Col} controlId="voorletter">
                            <Form.Label>Bedrijfsnaam:</Form.Label>
                            <Form.Control type="text" name="firstletter" required />
                            <Form.Control.Feedback type="invalid">
                                Vul uw bedrijfsnaam in.
                            </Form.Control.Feedback>
                            <Form.Control.Feedback type="valid">
                                Ziet er goed uit!
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>

                    <Form.Group controlId="postcode">
                        <Form.Label>Locatie bedrijf:</Form.Label>
                        <Form.Control type="text" name="postalcode" required />
                        <Form.Control.Feedback type="invalid">
                            Vul een geldige Locatie in.
                        </Form.Control.Feedback>
                        <Form.Control.Feedback type="valid">
                            Ziet er goed uit!
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="postcode">
                        <Form.Label>Link bedrijf:</Form.Label>
                        <Form.Control type="text" name="postalcode" required />
                        <Form.Control.Feedback type="invalid">
                            Vul een geldige Link in.
                        </Form.Control.Feedback>
                        <Form.Control.Feedback type="valid">
                            Ziet er goed uit!
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="email">
                        <Form.Label>KVK-nummer:</Form.Label>
                        <Form.Control type="text" name="email" required />
                        <Form.Control.Feedback type="invalid">
                            Vul een geldig KVK-nummer in.
                        </Form.Control.Feedback>
                        <Form.Control.Feedback type="valid">
                            Ziet er goed uit!
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="nummer">
                        <Form.Label>Contact persoon:</Form.Label>
                        <Form.Control type="text" name="telnumber" required />
                        <Form.Control.Feedback type="invalid">
                            Vul een geldig naam in.
                        </Form.Control.Feedback>
                        <Form.Control.Feedback type="valid">
                            Ziet er goed uit!
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Row>
                        <Form.Group controlId="nummer">
                            <Form.Label>Telefoonnummer:</Form.Label>
                            <Form.Control type="text" name="telnumber" required />
                            <Form.Control.Feedback type="invalid">
                                Vul een geldig telefoonnummer in.
                            </Form.Control.Feedback>
                            <Form.Control.Feedback type="valid">
                                Ziet er goed uit!
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="nummer">
                            <Form.Label>Email-adress:</Form.Label>
                            <Form.Control type="text" name="telnumber" required />
                            <Form.Control.Feedback type="invalid">
                                Vul een geldig email-adres in.
                            </Form.Control.Feedback>
                            <Form.Control.Feedback type="valid">
                                Ziet er goed uit!
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>

                    <Form.Check
                        type="checkbox"
                        label="Mogen commerciele partijen U benaderen?"
                        className="mt-3"
                    />

                    <Button variant="primary" type="submit" className="w-100 mt-3">
                        Maak account
                    </Button>
                    <p className="p-2">Heeft u al een account?</p>

                    <Button
                        href="ExpertLogin"
                        variant="success"
                        type="submit"
                        size="sm"
                        className="mt-2 text-left"
                    >
                        Log hier in
                    </Button>
                </Form>
            </Container>
        </body>
    );
};

CompanySignUp.propTypes = {
    handleToLogin: PropTypes.func.isRequired,
    handleToExpertPortal: PropTypes.func.isRequired,
};

export default CompanySignUp;