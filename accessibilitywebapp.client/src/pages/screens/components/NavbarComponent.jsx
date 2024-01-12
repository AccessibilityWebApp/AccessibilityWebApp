import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavbarComponent() {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" fixed="top">
            <Navbar.Brand>
                <img
                    alt="Logo van stichting accesibility"
                    src="/icons/logo_small.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                Stichting Accesibility
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="Portal">Home</Nav.Link>
                    <Nav.Link href="ExpertProfiel">Profiel</Nav.Link>
                    <Nav.Link href="#pricing">Log Uit</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavbarComponent;