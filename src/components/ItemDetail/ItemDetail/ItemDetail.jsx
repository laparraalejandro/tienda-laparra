import React, {useState} from "react";

import { Container, Card, Button} from 'react-bootstrap';

import ItemCount from "../../ItemList/Item/ItemCount";
import ItemDetailCarousel from "../ItemDetailCarousel/ItemDetailCarousel"


const ItemDetail = ({ item }) => {

    const hasComprado = () => alert("Acabas de comprar tu/s Item/s");

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

    return (
        <>
            <Container>
                <Card style={{ width: '26rem' }}>
                    <ItemDetailCarousel item={item}></ItemDetailCarousel>
                    <Card.Body>
                        <Card.Title>{item.name+" "+item.brand}</Card.Title>
                        <Card.Text>
                            {item.shortDescription+(item.gender?" ("+item.gender+")":"")}
                        </Card.Text>
                        <Card.Text>
                            {item.detailedDescription}
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
                        <small className="text-muted"><ItemCount initial={1} min={0} max={item.stock} unPrice={item.price}/></small>
                    </Card.Footer>
                </Card>
            </Container>
        </>
    );
};

export default ItemDetail;
