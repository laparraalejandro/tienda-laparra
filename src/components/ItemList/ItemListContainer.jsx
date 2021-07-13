import React, {useState} from "react";

import { Container, CardColumns } from 'react-bootstrap';
import "./ItemListContainer.scss";

import Item from "./Item/Item";
import Loader from "../Loader/Loader";


const ItemListContainer = ({ greeting, ItemList }) => {

    const itemsArray = ItemList;

    const [displayItems, setDisplayItems] = useState([]);
    
    const getItems = ()=>{
        return new Promise((resolve, reject)=>{
            setTimeout(() => {
                resolve(itemsArray);
            }, 2000);
        })
    }

    getItems().then((result)=>setDisplayItems(result));

    return (
        <>
            <main className="home">
                <div className="home__title">
                    <h1>{greeting}</h1>
                    <div>
                        {!displayItems.length?<Loader/>:
                        <Container fluid="sm">
                            <CardColumns className="justify-content-md-center">
                                {ItemList.map(item => (
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


