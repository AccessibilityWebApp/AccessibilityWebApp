import React, { useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import "@/pages/pages_css/Login.css";

const ExpertLogin = ({
    handleToAanmeld,
    handleToPortal,
    handleToExpertPortal,
}) => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <body className="logIn">
            <div id="login-form">
                <h1>Inloggen</h1>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group controlId="username">
                        <Form.Label>Gebruikersnaam:</Form.Label>
                        <Form.Control type="text" name="username" required />
                        <Form.Control.Feedback type="invalid">
                            Vul uw gebruikersnaam in.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="password">
                        <Form.Label>Wachtwoord:</Form.Label>
                        <Form.Control type="password" name="password" required />
                        <Form.Control.Feedback type="invalid">
                            Vul uw wachtwoord in.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Check type="checkbox" label="Blijf ingelogd" className="mt-3" />

                    <Button variant="primary" type="submit" className="w-100 mt-3">
                        Aanmelden
                    </Button>

                    <Row>
                        <Col>
                            <Button
                                variant="link"
                                type="submit"
                                size="sm"
                                className="mt-2 p-0"
                            >
                                Wachtwoord vergeten?
                            </Button>
                        </Col>

                        <Col>
                            <p className="forgotPass">Heb je nog geen account?</p>
                        </Col>
                        <Col>
                            <Button
                                href="expert_signup"
                                variant="success"
                                type="submit"
                                size="sm"
                                className="mt-2 text-left"
                            >
                                Registreren
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        </body>
    );
};

ExpertLogin.propTypes = {
    handleToAanmeld: PropTypes.func.isRequired,
    handleToPortal: PropTypes.func.isRequired,
    handleToExpertPortal: PropTypes.func.isRequired,
};

export default ExpertLogin;
