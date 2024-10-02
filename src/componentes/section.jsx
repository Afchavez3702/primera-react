import React from "react";
import './Section.css';

function Section(){
    return(
        <div class='row'>
            <section class='col s12'>
                <h2 class='header center'>
                    Deleita tu paladar con nuestros productos.
                </h2>
                <div class='col s12 m3'>
                
                    <div class="card">
                        <div class="card-image">
                        <img src="https://img.freepik.com/free-photo/festive-cute-halloween-cookies_53876-40608.jpg?t=st=1727827252~exp=1727830852~hmac=92eb1b0e8c0747e149b2dd8d5f4fe7cddb328982685681a78f40abf371cb77b5&w=740" alt="Galletas halloween" />
                        <span class="card-title" id='titulo-caja'><b>Horripi galletas</b></span>
                        <a class="btn-floating halfway-fab waves-effect waves-light red pulse" id="boton"><i class="material-icons">add_shopping_cart</i></a>
                        </div>
                        <div class="card-content">
                        <p><b>$1500</b></p>
                        <p>Deliciosas y horripi galletas que te harán gritar de la emoción</p>
                    </div>
                    
                </div>
            </div>

            </section>

        </div>
    )
}
export default Section;