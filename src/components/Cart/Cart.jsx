import React, {useState, useEffect, useContext} from 'react';
import { useLocation } from 'react-router-dom';
import {CartContext} from '../../services/CartContext';
import {Link} from 'react-router-dom'

import { Container, Card, ListGroup, Button} from 'react-bootstrap';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import "./Cart.scss";



const Cart = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
 
    const{cart, removeFromCart, totalCart }=useContext(CartContext);
    const handleRemove=(cartItem)=>{
        removeFromCart(cartItem);
    }

    const hasPagado = ()=>{alert("HAS PAGADO!")};

    return (
        <>
            <main className="home">
                <Container fluid center style={{ minHeight: '350px' }}>
                    <div class="row justify-content-md-center">
                        {!(cart.length==0) ? (
                        <Card style={{ width: '26rem' }}>
                            <Card.Header>Items en el Carrito:</Card.Header>
                            <ListGroup variant="flush">
                                {cart.map(cartItem => (
                                    <ListGroup.Item>
                                        <DeleteRoundedIcon onClick={()=>{handleRemove(cartItem);}}/>
                                        &nbsp;&nbsp;{cartItem.name+" ("+cartItem.quantity+") -- $ "+parseInt(cartItem.price)*cartItem.quantity}
                                        <Card.Img style={{ width: '5rem', float:'right' }} variant="top" src={cartItem.img[0]} />
                                    </ListGroup.Item>
                                ))}
                                <ListGroup.Item>Total : $ {totalCart()}</ListGroup.Item>
                                <ListGroup.Item>
                                    <Button onClick={()=>{hasPagado();}}>PAGAR</Button>
                                    <Link to={'/'}>
                                        &nbsp;&nbsp;<Button>SEGUIR COMPRANDO</Button>
                                    </Link>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                        ) : (
                        <Card style={{ width: '26rem' }}>
                            <Card.Header>El carrito esta vacio</Card.Header>
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <Link to={'/'}>
                                        <Button>VOLVER A LA TIENDA</Button>
                                    </Link>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                        )}
                    </div>
                </Container>
            </main>
        </>
    );
};


export default Cart;


