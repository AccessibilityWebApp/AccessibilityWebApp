import React from "react";
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import "@/pages/pages_css/AssignmentCreator.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from "./NavbarComponent";

const AssignmentCreator = () => {
    return (
        <div>
            <header>
                <NavbarComponent />
            </header>

            <Form>
                <FormGroup controlId="formAssignmentTitle">
                    <Form.Label>Titel</Form.Label>
                    <FormControl type="text" placeholder="Titel" />
                </FormGroup>

                <FormGroup controlId="formAssignmentDescription">
                    <Form.Label>Beschrijving</Form.Label>
                    <FormControl type="text" placeholder="Beschrijf je opdracht..." />
                </FormGroup>

                <FormGroup controlId="formAssignmentLocation">
                    <Form.Label>Locatie</Form.Label>
                    <FormControl type="text" placeholder="Locatie" />
                </FormGroup>

                <FormGroup controlId="formAssignmentReward">
                    <Form.Label>Beloning</Form.Label>
                    <FormControl type="text" placeholder="Beloning" />
                </FormGroup>

                <FormGroup controlId="formAssignmentOptions">
                    <Form.Label>Beperking(en)</Form.Label>
                    <Form.Control as="select">
                        <option disabled>Select options</option>
                        <option value="option1">Blind</option>
                        <option value="option2">Doof</option>
                        <option value="option3">Stom</option>
                    </Form.Control>
                </FormGroup>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default AssignmentCreator;
