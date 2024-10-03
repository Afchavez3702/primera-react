import './App.css';
import './componentes/header.css';
import './componentes/Nav.css';
import Header from './componentes/header';
import Nav from './componentes/nav.js';
import Catalogo from './componentes/section.jsx';
import Comentario from './componentes/comentarios.js'
import Footer from './componentes/Footer.jsx';
import 'materialize-css';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Header/> 
      <div class='row'>
        <div class='col s12'>
          <h3>Disfruta de nuestros productos.</h3>
        </div>
        <Catalogo
          imagen='relleno'
          producto='Pan Relleno'
          precio='2500'
          descripcion='Relleno de queso, bocadillo, nutela entre otros'
        />
        <Catalogo
          imagen='integral'
          producto='Pan Integral'
          precio='3000'
          descripcion='Saludable, delicioso y nutritivo.Horneado artesanalmente.'
        />
        <Catalogo
          imagen='rosca'
          producto='Bagels'
          precio='1000'
          descripcion='Rellenos de bocadillo o arequipe, con azucar espolvoreada.'
        />
        <Catalogo
          imagen='baguet'
          producto='Pan Baguet'
          precio='2800'
          descripcion='Hecho con especias. Puedes acompañar tus pastas preferidas.'
        />
      </div>
      <div class='row'>
        <div class='container'>
          <h3 class='text center'>Opiniones de nuestros clientes</h3>
        <Comentario 
            usuario='Claudia Palacios'
            calificacion='5/5'
            comentario='Tuve la oportunidad de ir a el establecimiento con mi familia y la atencion fué muy rápida. La comida estaba deliciosa.'
        />
         <Comentario 
            usuario='Maria Lucía Fernandez'
            calificacion='4,5/5'
            comentario='Al momento de recibir los productos, el domiciliario no fué cortez, tuvo una pelea con el portero de la unidad por no dejar ingresar su motocicleta.'
        />
         <Comentario 
            usuario='Carlos Alberto Muñoz'
            calificacion='3.8/5'
            comentario='No nos trajeron el pedido solicitado a la mesa con prontitud. Decidimos cancelar pedido e irnos pero, no nos devolvieron el dinero. Sin embargo nos dieron un descuento del 80% cuando volvamos a la cafetería'
        />
      </div>
      </div>       
      <Footer/>
    </div>
  );
}

export default App;
