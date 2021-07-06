import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Item from "./Item/Item";
import "./ItemListContainer.scss";


const ItemListContainer = ({ ItemList }) => {
    return (
        <>
            <Container>
                <Row className="justify-content-md-center">
                    {ItemList.map(item => (
                        <Col md="auto">
                            <Item item={item} key={item.id} className=""/>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
};

export default ItemListContainer;
