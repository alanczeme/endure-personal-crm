import React from 'react'
import { Navbar, Nav, NavItem, NavDropdown, Accordion } from 'react-bootstrap';

function NavBar() {
  return (
    <Navbar className="navbar">
      {/* <Navbar.Header>
        <Navbar.Brand>
          <a href="#">React-Bootstrap</a>
        </Navbar.Brand>
      </Navbar.Header> */}
      <Nav>
        <span className="navbar-brand mb-0">Logo</span>
        <NavItem href="#">Link</NavItem>
        <NavItem href="#">Link</NavItem>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <Accordion>Action</Accordion>
          <Accordion>Another action</Accordion>
          <Accordion>Something else here</Accordion>
          <Accordion>Separated link</Accordion>
        </NavDropdown>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
