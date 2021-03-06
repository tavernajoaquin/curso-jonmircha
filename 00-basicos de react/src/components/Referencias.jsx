import React, { useRef } from 'react';

export default function Referencias() {

  //Ref funciona como si fuera un selector pero dentro de react
  //se utiliza mas que nada para cambiar css
  //let refMenu = createRef(); //variable de referencia para class components
  let refMenutBtn = useRef(); //variable  de referencia para hooks
  let refMenu = useRef();

  // en lugar de modificar el elemento del DOM con getElementById, se utilizan referencias
  // const handleToggleMenu = (e) =>{
  //   const $menu = document.getElementById("menu");

  //   if(e.target.textContent === "Menú"){
  //     e.target.textContent = "Cerrar";
  //     $menu.style.display = "block";
  //   } else {
  //     e.target.textContent = "Menú";
  //     $menu.style.display = "none";
  //   }
  // }
  

   console.log(refMenu,refMenutBtn);

   const handleToggleMenu = (e) =>{

    if(refMenutBtn.current.textContent === "Menú"){
          refMenutBtn.current.textContent = "Cerrar";
          refMenu.current.style.display = "block";
        } else {
          refMenutBtn.current.textContent = "Menú";
          refMenu.current.style.display = "none";
        }
   }

  return(
    <>
      <h2>Referencias</h2>  
      <button id="menu-btn" ref={refMenutBtn} onClick={handleToggleMenu}>Menú</button>
      <nav id='menu' ref={refMenu} style={{display:"none"}}>
      <br />
      {/* eslint-disable-next-line */}
      <a href="#">Sección 1</a> 
      <br />
      {/* eslint-disable-next-line */}
      <a href="#">Sección 2</a>
      <br />
      {/* eslint-disable-next-line */}
      <a href="#">Sección 3</a>
      <br />
      {/* eslint-disable-next-line */}
      <a href="#">Sección 4</a>
      <br />
      {/* eslint-disable-next-line */}
      <a href="#">Sección 5</a> 
      <br />
      </nav>
    </>
  );

}