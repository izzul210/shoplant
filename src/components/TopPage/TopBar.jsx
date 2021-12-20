import React from 'react';

//Bootstrap stuff
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

function TopBar() {
    return (
        <div className="topBar" >
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand href="#home">ShoPlant</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <NavDropdown title="Our Products" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Plant A</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Plant B</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Plant C</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Plant D</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link>Cart</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default TopBar;