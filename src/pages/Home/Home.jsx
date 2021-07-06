import React from "react";
import { Container } from 'react-bootstrap';


//import ItemList from "../../components/ItemList/ItemList";
//import Slider from "../../components/Slider/Slider";

import "./Home.scss";

const Home = ({ greeting, itemContainer }) => {
  return (
    <main className="home">
      <div className="home__title">
        <h1>{greeting}</h1>
        <div>
          {itemContainer}
        </div>
      </div>
    </main>
  );
};

export default Home;