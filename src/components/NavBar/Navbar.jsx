import React from "react";
import { Route, Switch, Link, NavLink } from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap'

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
              {props.categorias.map((cat) =>
                <LinkContainer to={`/category/${cat.id}`} key={cat.id}>
                  <Nav.Link >{cat.name}</Nav.Link>
                </LinkContainer>
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













