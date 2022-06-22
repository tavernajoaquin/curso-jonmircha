import logo from './logo.svg';
import Componente from './components/Componente';
import Propiedades from './components/Propiedades';
import Contador from './components/Contador';
import './App.css';
import RenderizadoElem from './components/RenderizadoElem';
import {EventosES6, EventosES7, MasSobreEventos } from "./components/Eventos";
import ComunicacionComponentes from './components/ComunicacionComponentes';
import CicloDeVida from './components/CicloDeVida';
import AjaxApis from './components/AjaxApis';
import ContadorHooks from './components/ContadorHooks';
import ScrollHooks from './components/ScrollHooks';

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
          <hr></hr>
          <EventosES6/>
          <hr></hr>
          <EventosES7/>
          <hr></hr>
          <MasSobreEventos/>
          <hr/>
          <ComunicacionComponentes/>
          <hr/>
          <CicloDeVida/>
          <hr/>
          <AjaxApis/>
          <hr/>
          <ContadorHooks titulo="Clicks (pasado por props)"/>
          <hr/>
          <ScrollHooks/>
        </section>
      </header>
    </div>
  );
}

export default App;
