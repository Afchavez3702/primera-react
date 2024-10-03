import './App.css';
import './componentes/header.css';
import './componentes/Nav.css';
import Header from './componentes/header';
import Nav from './componentes/nav.js';
import Footer from './componentes/Footer.jsx';
import 'materialize-css';

function App2() {
  return (
    <div className="App">
      <Nav/>
      <Header/>
      <Section />
      <Footer/>
    </div>
  );
}

export default App2;
