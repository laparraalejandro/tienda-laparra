import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom';
import { getFirestore } from "../../firebase/firebase";

import "./ItemDetailContainer.scss";
import { Container, Row, Col } from 'react-bootstrap';

import ItemDetail from "./ItemDetail/ItemDetail"
import Loader from "../Loader/Loader";


const ItemDetailContainer = () => {

    const [item, setItem] = useState();
    const [loading, setLoading] = useState(false);
    const {id: idParams}=useParams();

    useEffect(() => {
        setLoading(true);
        setItem();
        const db = getFirestore();

        db.collection("itemsArray").doc(idParams).get()
            .then((querySnapshot) => {
                if (querySnapshot.size === 0) {
                    console.log("No results!");
                }
                setItem({id:idParams, ...querySnapshot.data()});
            })
            .catch((error) => {
                console.log("Error searching item", error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [idParams]);

    return (
        <>
            <main className="home">
                <Container fluid center>
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <div>
                                {loading ? <Loader /> : <ItemDetail item={item} />}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </main>
        </>

    );
};


export default ItemDetailContainer;


