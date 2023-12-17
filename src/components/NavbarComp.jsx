import logo from '../assets/logo.png';
import {Navbar, Container, Nav, Button} from 'react-bootstrap';


const NavbarComp = () => {
    return (
        <Navbar expand="lg" bg='dark' data-bs-theme="dark">
            <Container fluid>
                <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/AboutPage">About</Nav.Link>
                    <Nav.Link href="/NewsPage">News</Nav.Link>
                    <Button href='/LoginPage'>Login</Button>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComp;