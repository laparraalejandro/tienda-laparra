import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';



const NavBar = (props) =>{

    console.log(props);

  return(
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">{props.nombreDeLaTienda}</Navbar.Brand>
        <Nav className="mr-auto">
            {props.categorias.map((categoria)=>
            <Nav.Link href={"#"+categoria}>{categoria}</Nav.Link>
            )};
        </Nav>
        <Button variant="dark" onClick={props.carrito}>Carrito</Button>
    </Navbar>
  )  
};

export default NavBar;













