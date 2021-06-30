
import './App.css';
import NavBar from "./components/NavBar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const irAlCarrito = () => alert("Esto deberia ir al carrito");
  

  return (
    <>
      <div className="App">
        <NavBar 
          
          nombreDeLaTienda="Dream Market" 
          categorias={["electronica","bazaar","bishuteria"]}
          carrito={irAlCarrito}
        />
      </div>
      
    </>
  );
}

export default App;
