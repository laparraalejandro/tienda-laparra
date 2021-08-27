import React from "react";

//STYLES
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

//COMPONENTS
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import BuyFormContainer from "./components/BuyForm/BuyFormContainer";
import Footer from "./components/Footer/Footer";

//ROUTER-CONTEXT
import { Route, Switch, BrowserRouter } from "react-router-dom";
import CartContext from "./context/CartContext";
import GeneralContext from "./context/GeneralContext";

//APP DATA
const storeName = "Sport Store";
const github = "https://www.linkedin.com/in/alejandro-laparra-1a673850/";
const linkedin = "https://www.linkedin.com/in/alejandro-laparra-1a673850/";
const author = "Alejandro Laparra";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartContext>
          <GeneralContext>
            <NavBar storeName={storeName}/>
            <Switch>
              <Route exact path={["/", "/category/:categoryName"]} component={ItemListContainer} />
              <Route exact path="/product/:productID" component={ItemDetailContainer} />
              <Route exact path="/cart" component={Cart} />
              <Route exact path="/ckeckout" component={BuyFormContainer} />
            </Switch>
            <Footer
              github={github}
              linkedin={linkedin}
              author={author}
            />
          </GeneralContext>
        </CartContext>
      </BrowserRouter>
    </div>
  );
}

export default App;
