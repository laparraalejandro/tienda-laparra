
import './App.css';

//ROUTES
import {BrowserRouter, Switch, Route} from 'react-router-dom';

//STYLES
import "bootstrap/dist/css/bootstrap.min.css";
import CssBaseline from "@material-ui/core/CssBaseline";

//PAGES AND COMPONENTS
import NavBar from "./components/NavBar/Navbar";
import Cart from "./components/Cart/Cart";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import Footer from "./components/Footer/Footer";

//DUMMY DATA
import Data from "./components/data/data.json"
import CartIcon from './components/CartIcon/CartIcon';


function App() {

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <NavBar
            nombreDeLaTienda="Sport Market"
            categorias={Data.categoriesArray}
          />
          <Switch>
            <Route exact path="/">
              <ItemListContainer greeting="bienvenido" ItemList={Data.itemsArray}/>
            </Route>
            <Route path="/category/:id">
              <ItemListContainer greeting="bienvenido" ItemList={Data.itemsArray}/>
            </Route>
            <Route path="/item/:id">
              <ItemDetailContainer ItemList={Data.itemsArray}/>
            </Route>
            <Route path="/cart">
              <Cart/>
            </Route>
          </Switch>
          <Footer
            github="https://www.linkedin.com/in/alejandro-laparra-1a673850/"
            linkedin="https://www.linkedin.com/in/alejandro-laparra-1a673850/"
            author="Alejandro Laparra"
          />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
