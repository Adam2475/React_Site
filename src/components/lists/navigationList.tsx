import { Fragment } from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../../assets/logo.png";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import History from "../pages/historyPage";

function Header() {
    return (
        <Navbar bg="light" expand="lg" className="navbar">
            <Navbar.Brand href="/"><img src={logo} className="logo" alt="logo" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse id="navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="#stanze">Stanze</Nav.Link>
                    {/* <Nav.Link href="/history">Storia</Nav.Link> */}
                    <Nav.Link href="#footer">Contatti</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header