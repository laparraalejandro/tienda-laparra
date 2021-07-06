import { InsertEmoticonRounded } from "@material-ui/icons";
import React from "react";
import { Card, Button } from 'react-bootstrap';
import ItemCount from "./ItemCount";

//+ "/100px180"

const Item = ({ item }) => {

    const hasComprado = () => alert("Acabas de comprar tu/s Item/s");

    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item.img } />
                <Card.Body>
                    <Card.Title>{item.name+" "+item.brand}</Card.Title>
                    <Card.Text>
                        {item.description+" ("+item.gender+")"}
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
            <br />
        </>
    );
};



export default Item;
