
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

//CONTEXT
import {CartProvider} from "./services/CartContext";

//DUMMY DATA
import Data from "./components/data/data.json"

function App() {

  //APP DATA
  const greeting = "Tienda Deportiva";
  const github ="https://www.linkedin.com/in/alejandro-laparra-1a673850/";
  const linkedin ="https://www.linkedin.com/in/alejandro-laparra-1a673850/";
  const author ="Alejandro Laparra";

  return (
    <>
      <CartProvider>
        <div className="App">
          <BrowserRouter>
            <NavBar
              nombreDeLaTienda="Sport Market"
            />
            <Switch>
              <Route exact path="/">
                <ItemListContainer greeting={greeting} ItemList={Data.itemsArray} />
              </Route>
              <Route path="/category/:id">
                <ItemListContainer greeting={greeting} ItemList={Data.itemsArray} />
              </Route>
              <Route path="/item/:id">
                <ItemDetailContainer ItemList={Data.itemsArray} />
              </Route>
              <Route path="/cart">
                <Cart />
              </Route>
            </Switch>
            <Footer
              github={github}
              linkedin={linkedin}
              author={author}
            />
          </BrowserRouter>
        </div>
      </CartProvider>
    </>
  );
}

export default App;
