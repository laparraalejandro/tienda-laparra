import React from "react";
import { useLocation } from 'react-router-dom'

import { Carousel } from 'react-bootstrap';
import "./ItemDetailCarousel.scss";

const ItemDetailCarousel = ({ item }) => {
    return (
        <>
            <Carousel>
                {item.img.map(image => (
                    <Carousel.Item interval={1000}>
                        <div class="carousel__img__container">
                            <img
                                class="carousel__img"
                                src={window.location.origin+image}
                                alt="First slide"
                            />
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </>
    );
};


export default ItemDetailCarousel;

