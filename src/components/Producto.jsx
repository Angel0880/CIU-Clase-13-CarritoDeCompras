import React, { Fragment } from 'react';

function Producto({ articulo, articulos, carrito, agregarProducto }) {
    
    const { id, nombre, precio, imagen } = articulo;
    
    //Funcion para agregar articulos al carrito

    function seleccionarProducto(id) {

        const articulo = articulos.filter(articulo => articulo.id === id)[0];
        agregarProducto([... carrito, articulo]);
        console.log(articulo);

    }

    return (
        <Fragment>
            <div className='lista'>
                <p> ID: {id} | Nombre: {nombre} | Precio: {precio} </p>
                <button type='button' onClick={ () => seleccionarProducto(id) } > Comprar </button>
            </div>
        </Fragment>
    );
}

export default Producto;