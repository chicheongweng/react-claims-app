import React from 'react';
import { Navbar, Nav, NavDropdown, Button, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
//import 'bootstrap/dist/css/bootstrap.min.css';

const CustomNavbar: React.FC = () => {
  const { loggedInUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/">Insurance Co.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/claims">Claims</Nav.Link>
            <Nav.Link as={Link} to="/policies">Policies</Nav.Link>
            <Nav.Link as={Link} to="/support">Support</Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/about-us">About Us</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/contact">Contact</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/careers">Careers</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {loggedInUser ? (
            <>
              <span className="navbar-text me-3">Hello, {loggedInUser}</span>
              <Button variant="outline-danger" onClick={handleLogout}>Logout</Button>
            </>
          ) : (
            <Button variant="outline-success" onClick={() => navigate('/login')}>Login</Button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;