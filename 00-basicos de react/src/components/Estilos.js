import React from 'react';
import './Estilos.css';
import moduleStyles from './Estilos.module.css'
// import './Estilos.scss';

export default function Estilos(){

  let myStyles={
    borderRadius: ".5rem",
    margin:"2rem auto",
    maxWidth: "50%",
  }

  return (
    <section className="estilos">
      <h2>Estilos css en react</h2>
      <h3 className='bg-react' >Estilos en hoja de css externa</h3>
      <h3 
        className='bg-react' 
        style={{borderRadius:'5rem',margin:'3rem'}} 
      >
        Estilos en linea (atributo style)
      </h3>
      <h3 className='bg-react' style={myStyles}>Estilos en linea </h3>
      <h3 
        className='bg-react'
      >
        agregado de normalize con 
        <br/>
        <code>@import-normalize;</code>
        <br />
          importado en index.css
      </h3>
      <h3 className={moduleStyles.error} >Estilos con modulos, clase error</h3>
      <h3 className={moduleStyles.success} >Estilos con modulos, clase success</h3>
      {/* <h3 className='bg-sass'> Estilo con SASS</h3> */}
    </section>
  );
}

// codigo del scss de SASS
// $color-sass: #bf4080;
// $color-sass: #bf408080;

// .bg-sass{
//   background-color: $color-sass;
//   transition:background-color .5s ease-in-out;

//   &:hover{
//     background-color: $color-sass-80;
//   }
// }