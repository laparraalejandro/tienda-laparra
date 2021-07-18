import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import { useLocation } from 'react-router-dom'

import { Card, Button } from 'react-bootstrap';

import ItemCount from "./ItemCount";

//+ "/100px180"

const Item = ({ item }) => {

    const[count, setCount]=useState(1);
    const[finished, setFinished]=useState(false);
    const handleState = () => setFinished(!finished);

    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Link to={`/item/${item.id}`} class="itemDetail__override">
                    <Card.Img variant="top" src={window.location.origin + item.img[0]} />
                </Link>
                {!finished ? (
                    <>

                        <Card.Body>
                            <Card.Title class="itemDetail__override">{item.name + " " + item.brand}</Card.Title>
                            <Card.Text class="itemDetail__override">
                                {item.shortDescription + (item.gender ? " (" + item.gender + ")" : "")}
                            </Card.Text>
                            <Card.Text>
                                Precio: $ {item.price}
                            </Card.Text>
                            <Card.Text>
                                Stock: {item.stock}
                            </Card.Text>
                            <Button variant="primary" onClick={handleState}>Comprar </Button>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted"><ItemCount initial={1} count={count} setCount={setCount} stock={parseInt(item.stock)} unPrice={parseInt(item.price)} /></small>
                        </Card.Footer>
                    </>
                ) : (
                    <>
                        <Card.Body>
                            <Card.Title>{item.name + " " + item.brand}</Card.Title>
                            <Card.Text>
                                Unidad/es: {count}
                            </Card.Text>
                            <Card.Text>
                                Total: $ {count * item.price}
                            </Card.Text>
                            <Link to={'/cart'} onClick={handleState}>
                                <Button variant="primary" onClick={handleState}>Terminar </Button>
                            </Link>
                            &nbsp;&nbsp;
                            <Button variant="primary" onClick={handleState}>Modificar </Button>
                        </Card.Body>
                    </>
                )}
            </Card>
        </>
    );
};



export default Item;
