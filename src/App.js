import logo from './logo.svg';
import Componente from './components/Componente';
import Propiedades from './components/Propiedades';
import Contador from './components/Contador';
import './App.css';
import RenderizadoElem from './components/RenderizadoElem';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Learn React
          </a>
        </section>
        <section>
          <Componente msg='hola soy un mensaje'></Componente>
          <hr />
          <Propiedades
          str='aputo el q lee'
          int={10}
          buleano={true}
          arreglo={[1,2,3]}
          objeto={{nombre:"jorge",correo:"jorge@jorge.com"}}
          funcion={(num) => num*num}
          elementoReact = {<i>elemento react</i>}
          componenteReact = {<Componente msg='soy un componente'/>}
              />
          <hr></hr>
          <Contador></Contador>
          <hr></hr>
          <RenderizadoElem></RenderizadoElem>
        </section>
      </header>
    </div>
  );
}

export default App;
