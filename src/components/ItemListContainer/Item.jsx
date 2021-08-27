import React from "react";
import { Link } from "react-router-dom";
import { Card} from 'react-bootstrap';

const Item = ({ id, title, price, imgURL, stock }) => {
  return (
    <>
    <Link to={`/product/${id}`} className={` ${(stock === 0) ? "d-none" : ""}`}>
      <Card>
          <Card.Img variant="top" src={imgURL} />
        <Card.Body>
          <Card.Title >{title}</Card.Title>
          <Card.Text>
            Precio: $ {price}
          </Card.Text>
          <Card.Text>
            Stock: {stock}
          </Card.Text>
        </Card.Body>
      </Card>
      </Link>
    </>
  );
};
 
export default Item;


