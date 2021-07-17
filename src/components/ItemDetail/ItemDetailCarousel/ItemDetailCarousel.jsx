import React from "react";
import { useLocation } from 'react-router-dom'

import { Carousel } from 'react-bootstrap';

const ItemDetailCarousel = ({ item }) => {
    return (
        <>
            <Carousel>
                {item.img.map(image => (
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100"
                            src={window.location.origin+image}
                            alt="First slide"
                        />
                    </Carousel.Item>
                ))}
            </Carousel>
        </>
    );
};


export default ItemDetailCarousel;

