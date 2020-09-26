import React from 'react';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Example from './AutoComplete';

function NavBar() {
  return (
    <Navbar bg="light" expand="md" className="border-bottom sticky-top">
      <Container fluid="lg">
        <Navbar.Brand href="#home">
          <span style={{ color: 'firebrick', fontWeight: 'bold' }}>Market</span>
          News
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Market" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
          </Nav>
          <Example />
          <a className="btn btn-outline-success my-2" href="#..">
            Search
          </a>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
