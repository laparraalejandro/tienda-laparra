import React from "react";
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import CartIcon from "../CartIcon/CartIcon";
import { Route, Switch } from 'react-router-dom';


const NavBar = (props) => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" fixed='top' bg="dark" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Navbar.Brand href="#home">{props.nombreDeLaTienda}</Navbar.Brand>
            <Nav className="mr-auto">
              {props.categorias.map((categoria) =>
                <Nav.Link href={"#" + categoria}>{categoria}</Nav.Link>
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













