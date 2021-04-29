import logo from './logo.png';
import './App.css';
import hamburguesa from './hamburguesa.svg'

function App() {
  return (
    <div className="App">

      <div id="first-nav">
        <a href="#footer">Sign in</a> or 
        <a href="#footer">create an account</a>
      </div>

      <div id="second-nav">
        <img src={logo} className="logo" alt="logo" />              
      </div>

      <div className="second-nav-menu">
        <div className="second-nav-hamburger">
            <img src={hamburguesa} alt="hamburguesa" />
        </div>
      </div>

      <div className="second-nav-links">
      </div>

      <div id="banner">
        <div className="overlay">
            <h1>Lorem Ipsum</h1>
            <button>Learn More</button>
        </div>
    </div>

    <div id="items"></div>

    <div className="paginacion">
        Ver mas productos
    </div>

    <div id="footer">
        <p>Suscribite al newsletter</p>
        <form action="" method="post">
            <input type="text" />
            <button>Enviar</button>
        </form>
    </div>

    <div className="cookie">
        En este sitio utilizamos cookies para brindarle mejor servicio.
        <a href="#">Aceptar</a>
    </div>

    </div>
  );
}

export default App;
