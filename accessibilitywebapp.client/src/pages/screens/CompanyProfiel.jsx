import PropTypes from "prop-types";
import { Container, Image, Form, FormControl, Button } from 'react-bootstrap';
import NavbarComponent from "./components/NavbarComponent";

export const CompanyProfiel = ({ handleToExpertPortal }) => {
    return (
        <Container fluid className="margin mb-5">
            <NavbarComponent portalType="company" />

            <div className="text-center">
                <Image src="./icons/kou_logo.png" rounded />
            </div>

            <Form className="mt-5">
                <Form.Group controlId="formProfileName">
                    <Form.Label>Naam</Form.Label>
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
                    <Form.Label>Plaats</Form.Label>
                    <FormControl
                        type="text"
                        placeholder="Urk"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formProfileEmail">
                    <Form.Label>Link</Form.Label>
                    <FormControl
                        type="email"
                        placeholder="https://www.kpn.com/"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formProfilePhoneNumber">
                    <Form.Label>Telefoonnummer</Form.Label>
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
            </Form>
        </Container>
    );
};

CompanyProfiel.propTypes = {
    handleToExpertPortal: PropTypes.func.isRequired,
};

export default CompanyProfiel;