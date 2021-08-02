import React, { useState, useContext } from 'react';
import {Link} from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import {CartContext} from '../../../services/CartContext';

import { Card, Button } from 'react-bootstrap';
import "./Item.scss";

import ItemCount from "./ItemCount";



const Item = ({ item }) => {

    const[count, setCount]=useState(1);
    const[finished, setFinished]=useState(false);
    const handleState = () => setFinished(!finished);

    //Cart
    const { cart, addToCart, removeFromCart, isntInCart } = useContext(CartContext);
    const handleSend = () => {
        addToCart({ ...item, quantity: count });
    }
    const checkInCart = () => {
        if (isntInCart(item)) {
            handleState();
        }
    }
    const handleRemove = () => {
        removeFromCart(item);
    }

    return (
        <>
        {item.stock <=0 ? (<></>):(
            <>
            <Card style={{ width: '18rem' }} className="card">
                <Link to={`/item/${item.id}`} >
                    <Card.Img variant="top" src={item.img[0]} />
                </Link>
                {!finished ? ( 
                    <>

                        <Card.Body>
                            <Card.Title >{item.name + " " + item.brand}</Card.Title>
                            <Card.Text >
                                {item.shortDescription + (item.gender ? " (" + item.gender + ")" : "")}
                            </Card.Text>
                            <Card.Text>
                                Precio: $ {item.price}
                            </Card.Text>
                            <Card.Text>
                                Stock: {item.stock}
                            </Card.Text>
                            <Button variant="primary" onClick={()=>{checkInCart();handleSend();}}>Comprar </Button>
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
                            <Button variant="primary" onClick={()=>{handleState();handleRemove();}}>Modificar </Button>
                        </Card.Body>
                    </>
                )}
            </Card>
            </>
        )}    
        </>
    );
};



export default Item;




