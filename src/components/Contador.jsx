import React, {Component} from "react";
function EstadoAHijo(props){
  return(
    <>
      <h2>{props.estadoPadre}</h2>
    </>
  )
}


export default class Contador extends Component{
  constructor(props){
    super(props);
    this.state = {
      contador: 0,
    };
    /* comentado porque genera un warning en la consola y molesta
    asi esta mal hecho, necesita usar componentDidMount
    setInterval(()=>{
      this.setState({
        contador: this.state.contador + 1,
      });
    }, 1000); 
    */
  }

  render() {
    return (
      <div>
        <h2>El State</h2>
        {this.state.contador}
        <EstadoAHijo estadoPadre={this.state.contador}/>
      </div>
    );
  }
}

