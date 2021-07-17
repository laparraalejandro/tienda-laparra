import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom';

import "./ItemDetailContainer.scss";
import { Container, Row, Col } from 'react-bootstrap';

import ItemDetail from "./ItemDetail/ItemDetail"
import Loader from "../Loader/Loader";


const ItemDetailContainer = ({ItemList}) => {

    const itemsArray = ItemList;

    const[itemToDisplay, setItemToDisplay] = useState();

    const{id: idParams}=useParams();

    const getSelectedItem = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(itemsArray.find((itemAIterar) => itemAIterar.id.toString() == idParams));
            }, 2000);
        });
    };

    useEffect(()=>{
            setItemToDisplay();
            getSelectedItem().then((result)=>setItemToDisplay(result));
        },
        [idParams]
    );

    return (
        <>
            <main className="home">
                <Container fluid center>
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <div>
                                {!itemToDisplay ? <Loader /> : <ItemDetail item={itemToDisplay} />}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </main>
        </>

    );
};


export default ItemDetailContainer;


