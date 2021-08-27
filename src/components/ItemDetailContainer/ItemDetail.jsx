import React, { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import { Container, Card, Button} from 'react-bootstrap';
import ItemDetailCarousel from "./ItemDetailCarousel";

const ItemDetail = ({ item }) => {
  const [count, setCount] = useState(1);
  const updateCount = (event) => setCount(count + +event.target.value);

  const [hasFinish, setFinish] = useState(false);
  const updateFinish = () => setFinish(!hasFinish);

  const { addItem } = useCartContext();
  const clickHandler = () => {
    const newItem = { product: { ...item }, quantity: count };
    addItem(newItem);
  };

  return (
    <>
      <Container className="container d-flex p-2">
      <div class="row">
        <Card >
              <ItemDetailCarousel item={item}/>
          <Card.Body>
            <Card.Title 
               className="text-center">
              {item.title}
            </Card.Title>
            <Card.Text>
              {item.description}
            </Card.Text>
            <Card.Text>
              Precio: $ {item.price}
            </Card.Text>
            <Card.Text>
              Stock: {item.stock}
            </Card.Text>
            <Card.Text>
              {hasFinish ? (
                <Link to="/cart">
                  <Button 
                    variant="warning" 
                    onClick={clickHandler}>
                    Añadir al Carrito 
                  </Button>
                </Link>
              ) : (
                <ItemCount 
                  count={count} 
                  stock={item.stock} 
                  onAdd={updateCount} 
                  price={item.price} />
              )}
            </Card.Text>
            <Card.Text>
              <Button
                type="button"
                className={
                  `btn btn-primary ${
                    hasFinish ?
                     "is-warning" :
                      "is-success"
                  } is-light`
                }
                onClick={updateFinish}
                >
                  {hasFinish ?
                  "Actualizar orden" :
                  "Confirmar orden"}
              </Button>
            </Card.Text>
          </Card.Body>
        </Card>
        </div>
      </Container>
    </>
  );
};

export default ItemDetail;


