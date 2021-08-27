import React from "react";
import { Carousel } from 'react-bootstrap';
import "./ItemDetail.css";

const ItemDetailCarousel = ({ item }) => {
    return (
        <>
            <Carousel variant="dark">

                    <Carousel.Item interval={1000}>
                        <div class="ListItem-img">
                            <img
                                class='img-fluid w-100'
                                src={item.imgURL}
                                alt="First slide"
                            />
                        </div>
                    </Carousel.Item>

            </Carousel>
        </>
    );
};

export default ItemDetailCarousel;

