import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom';

import { Container, CardColumns, Card } from 'react-bootstrap';
import "./ItemListContainer.scss";

import Item from "./Item/Item";
import Loader from "../Loader/Loader";


const ItemListContainer = ({ greeting, ItemList }) => {

    const itemsArray = ItemList;

    const [displayItems, setDisplayItems] = useState([]);

    const {id: catParams} = useParams();

    useEffect(()=>{
        setDisplayItems([]);
        const getItems = ()=>{
            return new Promise((resolve, reject)=>{
                setTimeout(() => {
                    if(catParams){
                        resolve(itemsArray.filter((itemsAIterar)=>itemsAIterar.category.includes(catParams)));
                    }else{
                        resolve(itemsArray);
                    }
                }, 1000);
            });
        };
    getItems().then((result)=>setDisplayItems(result));
    }, [catParams, itemsArray]);


    return (
        <>
            <main className="home">
                <div className="home__title">
                    <h1>{greeting}</h1>
                    <div>
                        {!displayItems.length?<Loader/>:
                        <Container fluid="sm">
                            <CardColumns className="justify-content-md-center">
                                {displayItems.map(item => (
                                        <Item item={item} key={item.id} className="" />
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


