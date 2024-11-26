import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Button, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

const CustomNavbar: React.FC = () => {
  const { loggedInUser, logout } = useAuth();
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
    setExpanded(false); // Collapse the navbar
  };

  const handleSelect = () => {
    setExpanded(false); // Collapse the navbar
  };

  return (
    <Navbar bg="light" expand="lg" fixed="top" expanded={expanded}>
      <Container>
        <Navbar.Brand as={Link} to="/">Insurance Co.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : true)} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" onSelect={handleSelect}>
            <Nav.Link as={Link} to="/" onClick={handleSelect}>Home</Nav.Link>
            <Nav.Link as={Link} to="/claims" onClick={handleSelect}>Claims</Nav.Link>
            <Nav.Link as={Link} to="/policies" onClick={handleSelect}>Policies</Nav.Link>
            <Nav.Link as={Link} to="/support" onClick={handleSelect}>Support</Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/about-us" onClick={handleSelect}>About Us</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/contact" onClick={handleSelect}>Contact</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/careers" onClick={handleSelect}>Careers</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {loggedInUser ? (
            <>
              <span className="navbar-text me-3">Hello, {loggedInUser}</span>
              <Button variant="outline-danger" onClick={handleLogout}>Logout</Button>
            </>
          ) : (
            <Button variant="outline-success" onClick={() => { navigate('/login'); setExpanded(false); }}>Login</Button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;