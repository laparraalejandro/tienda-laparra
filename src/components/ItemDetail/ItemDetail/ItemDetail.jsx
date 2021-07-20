import React, {useState, useContext} from "react";
import {Link} from 'react-router-dom'
import {CartContext} from '../../../services/CartContext';

import { Container, Card, Button} from 'react-bootstrap';
import "./ItemDetail.scss";

import ItemCount from "../../ItemList/Item/ItemCount";
import ItemDetailCarousel from "../ItemDetailCarousel/ItemDetailCarousel"


const ItemDetail = ({ item }) => {

    //Items
    const itemToShow = item;
    const [displayItems, setDisplayItems] = useState([]);
    const getItems = ()=>{
        return new Promise((resolve, reject)=>{
            setTimeout(() => {
                resolve(itemToShow);
            }, 2000);
        })
    }
    getItems().then((result)=>setDisplayItems(result));

    //Count
    const[count, setCount]=useState(1);
    const[finished, setFinished]=useState(false);
    const handleState = () => setFinished(!finished);

    //Cart
    const{cart, addToCart, removeFromCart, isntInCart}=useContext(CartContext);
    const handleSend=()=>{
        addToCart({...item, quantity:count});
    }
    const checkInCart=()=>{
        if(isntInCart(item)){
            handleState();
        }
    }
    const handleRemove=()=>{
        removeFromCart(item);
    }

    return (
        <>
            <Container>
                <Card style={{ width: '26rem' }}>
                    <ItemDetailCarousel item={item}></ItemDetailCarousel>
                    {!finished ? (
                        <>
                            <Card.Body>
                                <Card.Title>{item.name + " " + item.brand + (item.gender ? " (" + item.gender + ")" : "")}</Card.Title>
                                <Card.Text>
                                    {item.detailedDescription}
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
                                <Card.Title>{item.name + " " + item.brand + (item.gender ? " (" + item.gender + ")" : "")}</Card.Title>
                                <Card.Text>
                                    {item.detailedDescription}
                                </Card.Text>
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
            </Container>
        </>
    );
};


export default ItemDetail;
