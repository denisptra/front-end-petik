import React, { useState } from "react";
import { NavLink } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavbarText,
} from "reactstrap";

function NavbarComponent(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar {...args} expand="md" className="bg-primary navbar-dark">
        <NavbarBrand className="text-light">
          Jual-in
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavLink to={"/"} className="text-light mx-3" style={{textDecoration: "none"}}>
              Home
            </NavLink>
            <NavLink to={"/dashboard"} className="text-light mx-3" style={{textDecoration: "none"}}>
              Dashboard
            </NavLink>
            <NavLink to={"/top"} className="text-light mx-3" style={{textDecoration: "none"}}>
              Top Rated
            </NavLink>
            <NavLink to={"/login"} className="text-light mx-3" style={{textDecoration: "none"}}>
              Login
            </NavLink>
          </Nav>
          <NavbarText>Samsul</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;