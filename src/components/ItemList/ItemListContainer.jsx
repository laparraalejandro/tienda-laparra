import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom';
import { getFirestore } from "../../firebase/firebase";

import { Container, CardColumns, Card } from 'react-bootstrap';
import "./ItemListContainer.scss";

import Item from "./Item/Item";
import Loader from "../Loader/Loader";


const ItemListContainer = ({ greeting }) => {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const {id: catParams} = useParams();
  
    useEffect(() => {
        setLoading(true);
        const db = getFirestore();

        const itemsCollection = (
            catParams ?
                db.collection("itemsArray").where("category", "array-contains", catParams)
                :
                db.collection("itemsArray")
        )

        itemsCollection
            .get()
            .then((querySnapshot) => {
                if (querySnapshot.size === 0) {
                    console.log("No results!");
                }
                setItems(
                    querySnapshot.docs.map((doc) => {
                            return { id: doc.id, ...doc.data() };
                    })
                );
            })
            .catch((error) => {
                console.log("Error searching items", error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [catParams]);
 
    return (
        <>
            <main className="home">
                <div className="home__title">
                    <h1>{greeting}</h1>
                    <div>
                        {loading ? <Loader /> :
                            <Container fluid="sm">
                                <CardColumns className="justify-content-md-center">
                                    {items.map(item => (
                                        <Item item={item} key={item.id} />
                                    ))}
                                </CardColumns>
                            </Container>}
                    </div>
                </div>
            </main>
        </>
    );
};

export default ItemListContainer;


