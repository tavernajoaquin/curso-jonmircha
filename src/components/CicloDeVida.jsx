import { Component } from "react";

class Reloj extends Component{
  // constructor(props){
  //   super(props);
  // }

  componentWillUnmount(){
    // console.log(3, "El componente ha sido desmontado");
  }

  render(){
    return (
      <>
        <h3>{this.props.hora}</h3>
      </>
    );
  }
}

class CicloDeVida extends Component {
  constructor(props){
    super(props);
    // console.log(0, "El componente se inicializa, NO está en el DOM");

    this.state = {
      hora: new Date().toLocaleTimeString(),
      visible: false,
    }
    this.temporizador = null;
  }
  //al finalizar el render, se ejecuta
  componentDidMount(){
    // console.log(1, "El componente se monto");
  }
  //al finali
  componentDidUpdate(prevProps, prevState){
    // console.log(2, "El componente se updateo");
    console.log(prevProps);
    console.log(prevState);
  }

  tictac = () => {
    this.temporizador = setInterval(() => {
      this.setState({
        hora: new Date().toLocaleTimeString(),
      });
    }, 1000);
  };

  iniciar = () => {
    this.tictac();
    this.setState({
      visible:true
    });
  };

  detener = () => {
    clearInterval(this.temporizador);
    this.setState({
      visible:false
    });
  };

  render() { 
    // console.log(4, "El componente se renderiza")
    return (
      <>
      <h2>Ciclo de vida de los Componentes de Clase</h2>
      {/* si la propiedad visible del estado = true, llamar al componente */}
      {this.state.visible && <Reloj hora={this.state.hora}/>}
      <button onClick={this.iniciar}>Iniciar</button>
      <button onClick={this.detener}>Detener</button>
      </>
    );
  }
}
 
export default CicloDeVida;

