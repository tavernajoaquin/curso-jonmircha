import React from 'react'
import { useState,useEffect } from "react";

export default function ScrollHooks() {

  const [scrollY,setScrollY] = useState(0);

  useEffect(() =>{
    //console.log("Moviendo el Scroll");

    const detectarScroll = () =>{
      setScrollY(window.pageYOffset);
    }

    window.addEventListener("scroll",detectarScroll);
  },[scrollY]);//se va a actualizar cuando cambie el scrollY

  //es como un componentDidMount. Tiene el arreglo definido al final
  useEffect(() => {
    //console.log("Fase de Montaje");
  }, []);

  //es como un componentDidUpdate. No tiene el arreglo definido al final
  useEffect(() => {
    //console.log("Fase de Actualización");
  });

  //es como un componentWillUnmount. Tiene que retornar un arrow function. return () => {funcion}
  useEffect(() => {
    return () => {
      //todo lo de adentro del return se ejecuta antes de desmontar
      //console.log("Fase de Desmontaje");

    }
  });

  return(
    <>
      <h2>Hooks - useEffecy y el Ciclo de Vida</h2>
      <p>Scroll Y del Navegador {scrollY}px</p>
    </>
  );

}