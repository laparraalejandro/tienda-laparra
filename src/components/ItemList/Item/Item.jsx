import React from 'react';
import {Link} from 'react-router-dom'

import { Card, Button } from 'react-bootstrap';

import ItemCount from "./ItemCount";

//+ "/100px180"

const Item = ({ item }) => {

    const hasComprado = () => alert("Acabas de comprar tu/s Item/s");

    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Link to={'/item/'+item.id}>
                <Card.Img variant="top" src={item.img[0] } />
                </Link>
                <Card.Body>
                    <Card.Title>{item.name+" "+item.brand}</Card.Title>
                    <Card.Text>
                        {item.shortDescription+(item.gender?" ("+item.gender+")":"")}
                    </Card.Text>
                    <Card.Text>
                        Precio: $ {item.price}
                    </Card.Text>
                    <Card.Text>
                        Stock: {item.stock}
                    </Card.Text>
                    <Button variant="primary" onClick={hasComprado}>Comprar </Button>        
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted"><ItemCount initial={1} min={0} max={parseInt(item.stock)} unPrice={parseInt(item.price)}/></small>
                </Card.Footer>
            </Card>
            <br />
        </>
    );
};



export default Item;
