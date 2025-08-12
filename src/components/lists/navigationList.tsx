import { Fragment } from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../../assets/logo.png";

function Header() {
    return (
        <Navbar bg="light" expand="lg" className="navbar">
            <Navbar.Brand href="#"><img src={logo} className="logo" alt="logo" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse id="navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="#">Home</Nav.Link>
                    <Nav.Link href="#">Features</Nav.Link>
                    <Nav.Link href="#">Pricing</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header