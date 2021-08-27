import React, {useEffect} from 'react';
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import { Container, Card, ListGroup, Button,Row} from 'react-bootstrap';
import "./Cart.css";

const CartTable = () => {
  const { cart, getItemsCount, calculateTotal, removeItem, clearCart } = useCartContext();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const removeFromCart = (event) => {
    const productID = event.target.value;
    removeItem(productID);
  };

  return (
    <>
    <main className="home">
      <Container 
        fluid 
        center >
        <Row ClassName="justify-content-md-center">
          <Card className="Cart-table">
            <Card.Header className="font-weight-bold text-center"> 
              {`${getItemsCount()} ${getItemsCount() > 1 ?
                 "Items on Cart" : "Item on Cart"}`}
            </Card.Header>
            <ListGroup variant="flush">
              {cart.map(cartItem => (
                <ListGroup.Item>
                  <p>
                  <h5 className="font-weight-bold">
                    <Button 
                      value={cartItem.product.id} 
                      onClick={removeFromCart} 
                      className="btn btn-warning btn-sm">
                        X
                    </Button>
                    &nbsp;&nbsp;{cartItem.product.title}
                    <Link to={`/product/${cartItem.product.id}`}>
                      <Card.Img 
                        variant="top" 
                        src={cartItem.product.imgURL} 
                        className="Cart-table-img"/>
                    </Link>
                    </h5>
                  </p>
                  <p>
                    &nbsp;&nbsp;{"Sub: ($"+cartItem.product.price
                    +" x "+cartItem.quantity+") : $ " 
                    + cartItem.quantity*cartItem.product.price}
                  </p>
                </ListGroup.Item>
              ))}
              <ListGroup.Item 
                className="font-weight-bold">
                Total: ${calculateTotal()}
                </ListGroup.Item>
              <ListGroup.Item className="text-center align-middle">
                  &nbsp;&nbsp;<Button 
                  className="btn btn-danger Cart-Buttons" 
                  onClick={clearCart}>
                    Vaciar
                  </Button>
                <Link to={'/'}>
                  &nbsp;&nbsp;<Button className="Cart-Buttons">
                    Seguir Comprando
                  </Button>
                </Link>
                <Link to={'/ckeckout'}>
                &nbsp;&nbsp;<Button
                className="btn btn-success Cart-Buttons">
                  PAGAR
                </Button>
              </Link>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Row>
      </Container>
    </main>
  </>
  );
};

export default CartTable;





