import React from "react";
import { Route, Switch, Link } from 'react-router-dom';

import CartIcon from "../CartIcon/CartIcon";

import { Navbar, Nav, Container, Button } from 'react-bootstrap';



const NavBar = (props) => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" fixed='top' bg="dark" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Link to={'/'}>
              <Navbar.Brand href="#home">{props.nombreDeLaTienda}</Navbar.Brand>
            </Link>
            <Nav className="mr-auto">
              {props.categorias.map((categoria) =>
                <Nav.Link href={"#" + categoria.name}>{categoria.name}</Nav.Link>
              )};
            </Nav>
          </Navbar.Collapse>
          <Button variant="dark" onClick={props.carrito}><CartIcon /></Button>
        </Container>
      </Navbar>
    </>
  )
};

export default NavBar;













