import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';


export const ExpertLogin = ({ handleToAanmeld, handleToPortal, handleToExpertPortal}) => {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Gebruiker</Form.Label>
                <Form.Control type="email"/>
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Wachtwoord</Form.Label>
                <Form.Control type="password" placeholder="" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember me" />
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
                <Button variant="link" onClick={handleToAanmeld}>
                    Forgot password?
                </Button>
            </div>
        </Form>
    );
};

ExpertLogin.propTypes = {
    handleToAanmeld: PropTypes.func.isRequired,
    handleToPortal: PropTypes.func.isRequired,
    handleToExpertPortal: PropTypes.func.isRequired,
};

export default ExpertLogin;