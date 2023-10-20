import React from "react";
import { Navbar, Nav, Container, Form, FormControl } from "react-bootstrap";
import { FaBars } from "react-icons/fa";

const AppNavbar = ({ onSearch }) => {
  return (
    <Navbar
      bg="red"
      expand="lg"
      className="sticky-center"
      style={{ zIndex: 200 }}
    >
      <Container>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Search..."
            onChange={(e) => onSearch(e.target.value)}
            className="fw-bold text-black"
          />
        </Form>
        <Navbar.Brand href="/" style={{ color: "red" }}>
        Sistem Toko Shidiq
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <FaBars style={{ color: "red" }} />
        </Navbar.Toggle>
        <Navbar.Collapse className="justify-content-end">
          <Nav className="ml-auto">
            <Nav.Link
              className="mr-auto"
              href="/cart"
              style={{ color: "blue" }}
            >
              Cart
            </Nav.Link>
            <Nav.Link
              className="mr-auto"
              href="/login"
              style={{ color: "blue" }}
            >
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
