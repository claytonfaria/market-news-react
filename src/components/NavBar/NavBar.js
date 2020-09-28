import React, { useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, useHistory } from 'react-router-dom';
import AutoCompleteField from './AutoCompleteField';

function NavBar({ setUpdateSymbol }) {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 990);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 990);
  };

  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  let history = useHistory();
  const onSubmit = (e) => {
    const symbol = e.target[0].value;
    e.preventDefault();
    setUpdateSymbol(true);
    history.push(`/${symbol}`);
  };

  return (
    <Navbar bg="light" expand="md" className="border-bottom sticky-top">
      <Container fluid="lg">
        <Link className="navbar-brand" to="/">
          <span style={{ color: 'firebrick', fontWeight: 'bold' }}>Market</span>
          News
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {!isDesktop && (
              <>
                <NavDropdown title="Overview" id="basic-nav-dropdown">
                  <Link to="/marketoverview" className="dropdown-item">
                    Market
                  </Link>
                  <Link to="/stocksoverview" className="dropdown-item">
                    Stocks
                  </Link>
                </NavDropdown>
                <Link to="/calendar" className="nav-link">
                  Economic Calendar
                </Link>{' '}
              </>
            )}
          </Nav>
          <Form inline onSubmit={onSubmit}>
            <div className="form-group">
              <AutoCompleteField />
              <Button type="submit" variant="success" className="my-2 mr-2">
                Search
              </Button>
            </div>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
