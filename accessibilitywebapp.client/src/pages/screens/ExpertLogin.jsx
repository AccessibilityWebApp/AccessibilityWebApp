import React from 'react';
import { Container, Button, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

const ExpertLogin = ({ handleToAanmeld, handleToPortal, handleToExpertPortal }) => {
    return (
        <Container fluid className="margin">
            <h1 className="mb-3">Login</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Gebruikersnaam / E-Mail</Form.Label>
                    <Form.Control type="email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Wachtwoord</Form.Label>
                    <Form.Control type="password" placeholder="" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Aangemeld blijven" />
                </Form.Group>

                <div className="d-grid gap-2">
                    <Button variant="secondary" onClick={handleToPortal}>
                        Back
                    </Button>
                    <Button variant="primary" onClick={handleToExpertPortal}>
                        Next
                    </Button>
                </div>

                <div className="mt-3">
                    <Button variant="link">
                        Wachtwoord vergeten?
                    </Button>
                </div>

                <div className="mt-3">
                    <Button variant="link">
                        Heb je nog geen account? Meld je hier aan
                    </Button>
                </div>
            </Form>
        </Container>
    );
};

ExpertLogin.propTypes = {
    handleToAanmeld: PropTypes.func.isRequired,
    handleToPortal: PropTypes.func.isRequired,
    handleToExpertPortal: PropTypes.func.isRequired,
};

export default ExpertLogin;
