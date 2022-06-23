import { useState, useEffect } from "react";

function Reloj({hora}){
  return <h3>{hora}</h3>
}

export default function RelojHooks() {

  const [hora, setHora] = useState(new Date().toLocaleTimeString());
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let temporizador;
    //si el temporizador tiene estado visible
    if(visible){
      //setear el estado hora cada 1 segundo
      temporizador = setInterval(() => {
        setHora(new Date().toLocaleTimeString());
      },1000);
    }else{
      //si no, limpiar la varaible temporizador
      clearInterval(temporizador);
    }

    return () => {
      //return equivalente a componentDidunmount
      console.log("Fase de desmontaje");
      clearInterval(temporizador);
    };
  }, [visible])

  return(
    <>
      <h2>Reloj Hooks</h2>
      {/* como va a ser una funcion que recibe un parametro de valor adicional al evento,
      hay que usar una funcion flecha */}
      {visible && <Reloj hora={hora}/>}
      <button onClick={() => setVisible(true)} >Iniciar</button>
      <button onClick={() => setVisible(false)}>Detener</button>

    </>
  )
}