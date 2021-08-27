import React from "react";
import cartEmpty from "../../assets/empty-cart.png";
import { Link } from "react-router-dom";
import { Container, Button} from 'react-bootstrap';
import "./Cart.css";

const CartEmpty = () => {
  return (
    <>
      <Container
        fluid
        center>
        <h2
          className="title">
          Tu carrito esta vacio
        </h2>
        <Link to="/">
          <Button
            role="link"
            variant="primary"
            size="lg">
            Seguir comprando
          </Button>
        </Link>
        <figure>
          <img
            className="mx-auto image Cart-Empty-img"
            src={cartEmpty} alt="" />
        </figure>
      </Container>
    </>
  );
};

export default CartEmpty;
