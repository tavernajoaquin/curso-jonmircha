import React,{Component} from "react";
import data from "../helpers/data.json";

function ElementoLista (props){
  return(
    <li>
      <a href={props.el.web} target="_blank" rel="noopener noreferrer">{props.el.name}</a>
    </li>
  )
}

export default class RenderizadoElem extends Component{
  constructor(props){
    super(props);
    this.state = {
      estaciones: ["Verano","Otoño","Invierno","Primavera"],
    };
  }

  render(){
    return(
      <div>
        <h2>Renderizado de Elementos</h2>
        <p>Estaciones</p>
        <ul>
          {this.state.estaciones.map((el, index) => (
            <li key={index}>{el}</li>
          ))}
        </ul>
        <h3>Renderizado a partir de un JSON</h3>
        <ul>
          {data.frameworks.map((el)=>(
            <ElementoLista key={el.id} el={el} />
          ))}
        </ul>
      </div>
    );
  }
}