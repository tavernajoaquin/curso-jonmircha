const Propiedades = (props) => {


  return ( 
    <div>
      <h2>{props.porDefecto}</h2>
      <ul>
        <li>{props.str}</li>
        <li>{props.int}</li>
        <li>{props.buleano}</li>
        <li>{props.arreglo.join(", ")}</li>
        <li>{props.objeto.nombre}</li>
        <li>{props.arreglo.map(props.funcion).join(", ")}</li>
        <li>{props.elementoReact}</li>
        <li>{props.componenteReact.msg}</li>
      </ul>
    </div>
   );
}

Propiedades.defaultProps = {
  porDefecto:"Prop por defecto"
}
 
export default Propiedades;