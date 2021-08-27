import React from "react";
import { LinkContainer } from 'react-router-bootstrap'
import { Nav } from 'react-bootstrap';

const NavbarCategories = ({ categories }) => {
  return (
    <>
      <Nav className="mr-auto">
        {categories.map(({ id, title }) => (
          <LinkContainer to={`/category/${title}`} key={id}>
            <Nav.Link >{title}</Nav.Link>
          </LinkContainer>
        ))}
      </Nav>
    </>
  );
};

export default NavbarCategories;

