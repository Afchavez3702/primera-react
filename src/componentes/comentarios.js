import React from "react";
import './comentarios.css';

function Comentario(props){
    return(
    <div class='comentario col s12 m10'>
        <div class="col s12 m12">
            <h4 class="header teal-text">{props.usuario}</h4>
            <div class="card horizontal">
                <p>Calificación: <b>{props.calificacion}</b> </p>    
            <div class="card-stacked">
            <div class="card-content">
                <p>{props.comentario}</p>
            </div>
        
      </div>
    </div>
  </div>
        </div>
    )
}

export default Comentario;