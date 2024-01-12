import PropTypes from "prop-types";
import { Container, Image, Form, FormControl, Button } from 'react-bootstrap';
import NavbarComponent from "./components/NavbarComponent";

export const ExpertProfiel = ({ handleToExpertPortal }) => {
    return (
        <Container fluid className="margin mb-5">
            <NavbarComponent />

            <div className="text-center">
                <Image src="./icons/kou_logo.png" rounded />
            </div>
            
            <Form className="mt-5">
                <Form.Group controlId="formProfileName">
                    <Form.Label>Voorletters</Form.Label>
                    <FormControl
                        type="text"
                        placeholder="M."
                    />
                    </Form.Group>
            
                <Form.Group controlId="formProfileSurname">
                    <Form.Label>Achternaam</Form.Label>
                    <FormControl
                        type="text"
                        placeholder="Gunus"
                    />
                </Form.Group>

                <Form.Group controlId="formProfilePostalcode">
                    <Form.Label>Postcode</Form.Label>
                    <FormControl
                        type="text"
                        placeholder="4206GG"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formProfileAge">
                    <Form.Label>Leeftijdscategorie</Form.Label>
                    <FormControl as="select" required>
                        <option value=""></option>
                        <option value="option1">Onder de 18</option>
                        <option value="option2">18-30</option>
                        <option value="option3">31-45</option>
                        <option value="option4">45+</option>
                    </FormControl>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formProfileEmail">
                    <Form.Label>E-Mail adres</Form.Label>
                    <FormControl
                        type="email"
                        placeholder="MGunus@gmail.com"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formProfilePhoneNumber">
                    <Form.Label>Telefoonnummer</Form.Label>
                    <FormControl
                        type="text"
                        placeholder="06 12345678"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formProfileContactMethod">
                    <Form.Label>Contactmethode</Form.Label>
                    <FormControl as="select" required>
                        <option value=""></option>
                        <option value="option1">Telefonisch</option>
                        <option value="option2">E-Mail</option>
                    </FormControl>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formProfileOptions">
                    <Form.Label>Beperking</Form.Label>
                    <FormControl as="select" required>
                        <option value="">Kies een beperking</option>
                        <option value="option1">Blind</option>
                        <option value="option2">Doof</option>
                        <option value="option3">ADHD</option>
                    </FormControl>
                </Form.Group>


                <Button variant="success" type="submit" className="Knop me-3">
                    Bevestig
                </Button>

                <Button variant="danger" type="submit" className="Knop">
                    Verwijder Account
                </Button>
            </Form>
        </Container>
    );
};

ExpertProfiel.propTypes = {
    handleToExpertPortal: PropTypes.func.isRequired,
};

export default ExpertProfiel;
