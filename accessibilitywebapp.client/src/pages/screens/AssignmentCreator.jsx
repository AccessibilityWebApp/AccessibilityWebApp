import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import NavbarComponent from "./components/NavbarComponent";
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'

const AssignmentCreator = () => {
    return (
        <>
            <header>
                <NavbarComponent />
            </header>
            <Container fluid="md" className="mt-5">
                <Form>
                    <Form.Group className="mb-3" controlId="formAssignmentTitle">
                        <Form.Label>Titel</Form.Label>
                        <FormControl type="text" placeholder="Titel" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formAssignmentDescription">
                        <Form.Label>Beschrijving</Form.Label>
                        <FormControl type="text" placeholder="Beschrijf je opdracht..." />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formAssignmentLocation">
                        <Form.Label>Locatie</Form.Label>
                        <FormControl type="text" placeholder="Locatie" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formAssignmentReward">
                        <Form.Label>Beloning</Form.Label>
                        <FormControl type="text" placeholder="Beloning" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formAssignmentOptions">
                        <Form.Label>Beperking</Form.Label>
                        <Form.Control as="select">
                            <option disabled>Kies een beperking</option>
                            <option value="option1">Blind</option>
                            <option value="option2">Doof</option>
                            <option value="option3">ADHD</option>
                        </Form.Control>
                    </Form.Group>

                    <Button variant="primary" type="submit" className="Knop">
                        Bevestig
                    </Button>
                </Form>
            </Container>
        </>
    );
};

export default AssignmentCreator;
