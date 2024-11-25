import React from 'react';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';

const CustomNavbar: React.FC = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Insurance Co.</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#claims">Claims</Nav.Link>
          <Nav.Link href="#policies">Policies</Nav.Link>
          <Nav.Link href="#support">Support</Nav.Link>
          <NavDropdown title="More" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">About Us</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Contact</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.3">Careers</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Button variant="outline-success">Login</Button>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CustomNavbar;