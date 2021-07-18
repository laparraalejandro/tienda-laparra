import React, {useState, useEffect} from "react";
import { useLocation } from 'react-router-dom'

import { Container} from 'react-bootstrap';


const Cart = () => {

    return (
        <>
            <main className="home">
                <Container fluid center>
                    <div class="row justify-content-md-center">
                        <img src={window.location.origin + "/img/site-under-construction.png"}></img>
                    </div>
                </Container>
            </main>
        </>

    );
};


export default Cart;


