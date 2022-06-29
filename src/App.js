import { Fragment, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Producto from './components/Producto';
import Carrito from './components/Carrito';

function App() {

  //Hook para la lista de productos
  const [articulos, guardarProductos] = useState([

    {id: 0, nombre:"Funko Pop Darth Vader", precio: 4000},
    {id: 1, nombre:"Ps4 Slim 1TB", precio: 80000},
    {id: 2, nombre:"Remera Dragon Ball Z", precio: 2000},
    {id: 3, nombre:"Taza Los Simpson", precio: 300}

  ]);

  //Hook para la lista del carrito (articulos comprados)
  const [carrito, agregarProducto] = useState([]);

  return (
    <Fragment>
      <Header 
        titulo = "The Geek Shop"
      />
      <div className='tituloLista'>
        Lista de productos
      </div>
      {
        articulos.map(

          articulo => (

            <Producto 
            
              articulo={articulo}
              key = {articulo.id}
              articulos = {articulos}
              carrito = {carrito}
              agregarProducto = {agregarProducto}

            />

          )

        )
      }
      <Carrito 
          
          carrito = {carrito}
    
      />
      <Footer />
    </Fragment>
    
  );
}

export default App;
