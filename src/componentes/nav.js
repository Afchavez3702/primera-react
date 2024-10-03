import React from "react";
function Nav(){
    return(
        <div clas='row'>
            <nav>
                <div class="nav-wrapper teal">
                <a href="#" class="brand-logo">Andres</a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><a href="sass.html">Inicio</a></li>
                    <li><a href="nosotros.html">nosotros</a></li>
                    <li><a href="collapsible.html">Facturación</a></li>
                </ul>
                </div>
            </nav>
        </div>
    )
}

export default Nav;