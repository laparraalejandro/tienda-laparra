import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import logo from "../../assets/logo.png";
import NavbarCategories from "./NavbarCategories";
import { requestCategories } from "../../scripts/firebaseConfig";
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

const NavBar = (appData) => {
  const [categories, setCategories] = useState(null);

  const getCategories = () => {
    const onResponse = (response) => setCategories(response);
    requestCategories(onResponse);
  };

  useEffect(getCategories, []);

  return (
    <>
      <Navbar collapseOnSelect expand="lg" fixed='top' bg="dark" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Link to={'/'}>
              <Navbar.Brand href="#home"><img src={logo} alt="" />&nbsp;&nbsp;{appData.storeName}</Navbar.Brand>
            </Link>
            <Nav className="mr-auto">
              {categories && <NavbarCategories categories={categories} />}
            </Nav>
          </Navbar.Collapse>
          <Link to={'/cart'}>
            <Button variant="dark"><CartWidget /></Button>
          </Link>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
