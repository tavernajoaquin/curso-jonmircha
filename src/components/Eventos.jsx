import { Component } from "react";


export class EventosES6 extends Component{
  constructor(props){
    super(props);
    this.state = {
      contador: 0,
    };
     //para poder usar this dentro de la funcion
     this.sumar = this.sumar.bind(this); //se bindea el this del componente con el this de la función
     this.restar = this.restar.bind(this);
  }

  sumar(e){
    this.setState({
      contador:this.state.contador + 1,
    });
  }

  restar(e){
    this.setState({
      contador:this.state.contador - 1,
    });
  }
  
  render(){
    return(
      <div>
        <h2>Eventos en componentes de clase</h2>
        <nav>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </nav>
        <h3>{this.state.contador}</h3>
      </div>
    )
  }
}

//Properties Initializer
export class EventosES7 extends Component{
  state = {
    contador: 0,
  };

  //Arrow functions heredan el this del contexto en el que se encuentran
  sumar = (e) => {
    this.setState({
      contador:this.state.contador + 1,
    });
  }

  restar = (e) => {
    this.setState({
      contador:this.state.contador - 1,
    });
  }
  
  render(){
    return(
      <div>
        <h2>Eventos en componentes de clase</h2>
        <nav>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </nav>
        <h3>{this.state.contador}</h3>
      </div>
    )
  }
}

// function Boton (props){
//   return <button onClick={props.myOnClick}>Botón hecho componente</button>
// }

// const Boton = (props) => (
//   <button onClick={props.myOnClick}>Botón hecho componente</button>
// );

const Boton = ({myOnClick}) => (
  <button onClick={myOnClick}>Botón hecho componente</button>
);

export class MasSobreEventos extends Component{
  
  handleClick = (e, mensaje) =>{
    console.log(e);
    console.log(e.nativeEvent);
    console.log(e.target);
    console.log(e.nativeEvent.target);
    console.log(mensaje);
  }
  
  render(){
  return(
      <div>
        <h2>Más sobre eventos</h2>
        <button onClick={this.handleClick}>Saludar</button>
        {/* El evento  */}
        <button onClick={(e) => this.handleClick(e,"pasando parametro desde un evento")}>Saludar</button>
        {/* Evento Personalizado (se usa para pasr eventos de js a los componentes) */}
        <Boton myOnClick={(e) => this.handleClick(e,"pasando parametro desde un evento")}/>
      </div>
    )
  }
}