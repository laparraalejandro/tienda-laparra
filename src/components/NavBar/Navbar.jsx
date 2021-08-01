import React, { useState, useEffect } from "react";
import { getFirestore } from "../../firebase/firebase";
import { Route, Switch, Link, NavLink } from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap'

import CartIcon from "../CartIcon/CartIcon";

import { Spinner,Navbar, Nav, Container, Button } from 'react-bootstrap';



const NavBar = (props) => {

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const categoriesCollection = db.collection("categoriesArray");

    categoriesCollection
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          console.log("No results!");
        }
        setCategories(
          querySnapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          })
        );
      })
      .catch((error) => {
        console.log("Error searching items", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Navbar collapseOnSelect expand="lg" fixed='top' bg="dark" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Link to={'/'}>
              <Navbar.Brand href="#home">{props.nombreDeLaTienda}</Navbar.Brand>
            </Link>
            {!loading ? (
            <Nav className="mr-auto">
              {categories.map((cat) =>
                <LinkContainer to={`/category/${cat.id}`} key={cat.id}>
                  <Nav.Link >{cat.name}</Nav.Link>
                </LinkContainer>
              )};
            </Nav>
            ) : (
                <Nav className="mr-auto">
                  <Nav.Link >
                    <Spinner animation="border" class="pl-5" variant="primary">
                      <span className="sr-only">Loading...</span>
                    </Spinner>
                  </Nav.Link>
                </Nav>
            )}
          </Navbar.Collapse>
          <Link to={'/cart'}>
            <Button variant="dark" onClick={props.carrito}><CartIcon /></Button>
          </Link>
        </Container>
      </Navbar>
    </>
  )
};

export default NavBar;













