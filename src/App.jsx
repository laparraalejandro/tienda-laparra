
import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";
import CssBaseline from "@material-ui/core/CssBaseline";

import NavBar from "./components/NavBar/Navbar";
import Home from "./pages/Home/Home";
import ItemListContainer from "./components/ItemList/ItemListContainer";

import Footer from "./components/Footer/Footer";


function App() {

  const irAlCarrito = () => alert("Nota: Armar funcionalidad de carrito en CartIcon");

  const itemsArray = [{
    id: 1,
    name: "zapatillas",
    description: "zapatillas running",
    brand: "nike",
    model: "marathon 2021",
    gender: "hombre",
    img: "./img/zapatilla-nike-h-1.jpg",
    category: 1,
    price: 6500,
    stock: 11
},
{
    id: 2,
    name: "remera",
    description: "remera deportiva",
    brand: "adidas",
    model: "coleccion summer 2022",
    gender: "hombre",
    img: "./img/remera-adidas-h-1.jpg",
    category: 1,
    price: 2000,
    stock: 5
},
{
  id: 3,
  name: "plumbus",
  description: "un plumbus",
  brand: "sloorp",
  model: "coleccion primavera 2066",
  gender: "unisex",
  img: "./img/plumbus-slorpian-h-1.jpg",
  category: 6,
  price: 3000,
  stock: 4
},
{
  id: 4,
  name: "pantalon",
  description: "pantalon deportivo",
  brand: "nike",
  model: "running",
  gender: "mujer",
  img: "./img/pantalon-nike-m-1.jpg",
  category: 1,
  price: 2300,
  stock: 9
}
];

  return (
    <>
      <div className="App">
        <NavBar 
          nombreDeLaTienda="Dream Market" 
          categorias={["sport","mujer","trajes"]}
          carrito={irAlCarrito}
        />
        <Home 
          greeting="bievenido"
          itemList={itemsArray}
          itemContainer={<ItemListContainer ItemList={itemsArray}></ItemListContainer>}
        />

        <Footer
          github="https://www.linkedin.com/in/alejandro-laparra-1a673850/"
          linkedin="https://www.linkedin.com/in/alejandro-laparra-1a673850/"
          author="Alejandro Laparra"
        />
      </div>
      
    </>
  );
}

export default App;
