import React from "react";
import './Catalogo.css';

function Catalogo(props){
    return(
            <div class='col s12 m3'>
            
                <div class="card">
                    <div class="card-image">
                    <img src={require(`../imagenes/producto-${props.imagen}.jpg`)} alt="Producto de panaderia" />
                    <span class="card-title" id='titulo-caja'><b>{props.producto}</b></span>
                    <a class="btn-floating halfway-fab waves-effect waves-light red pulse" id="boton" href="carrito.js"><i class="material-icons">add_shopping_cart</i></a>
                    </div>
                    <div class="card-content">
                    <p><b>{props.precio}</b></p>
                    <p>{props.descripcion}</p>
                </div>
                
            </div>
        </div>                
            
        
    )
}

export default Catalogo;