import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import "@/pages/pages_css/AssignmentCreator.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from "./components/NavbarComponent";

const AssignmentCreator = () => {
    return (
        <div>
            <header>
                <NavbarComponent />
            </header>

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
        </div>
    );
};

export default AssignmentCreator;
