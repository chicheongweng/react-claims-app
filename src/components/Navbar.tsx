import React from 'react';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CustomNavbar: React.FC = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">Insurance Co.</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
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
        <Button variant="outline-success">Login</Button>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CustomNavbar;