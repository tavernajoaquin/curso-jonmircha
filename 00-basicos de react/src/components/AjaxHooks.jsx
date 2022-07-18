import React, { useState, useEffect } from 'react';

const Pokemon = ({avatar, name}) => { 
  return(
    <figure>
      <img src={avatar} alt={name} />
      <figcaption>{name}</figcaption>
    </figure>
  );
 }

export default function AjaxHooks() {

const [pokemons, setPokemons] = useState([]);
//fetch de Ajax con Componentes de Clase modificado a Componente Funcional
// useEffect(() => {
//   let url = "https://pokeapi.co/api/v2/pokemon/";
//     fetch(url)
//       .then((res) => res.json())
//       .then((json) => {
//         //console.log(json);
//         json.results.forEach((el) => {
//           fetch(el.url)
//             .then((res) => res.json())
//             .then((json) => {
//               //console.log(json);
//               let pokemon = {
//                 id: json.id,
//                 name: json.name,
//                 avatar: json.sprites.front_default,
//               };
//               //sin la arrow function, solo carga un pokemon
//               setPokemons((pokemons)=>[...pokemons, pokemon]);

//             });
//         });
//       });
// }, []);

  useEffect(() => {
    //si necesitas que el useEffect use funciones asincronas
    //o haga peticiones asincronas, tenes que hacer una funcion
    //asincrona ADENTRO del useEffect

    const getPokemons = async (url) => {
      let res = await fetch(url), //esperamos la respuesta
        json = await res.json();

        json.results.forEach(async (el) => {
          let res = await fetch(el.url),
          json = await res.json();
            
            //console.log(json);
            let pokemon = {
              id: json.id,
              name: json.name,
              avatar: json.sprites.front_default,
            };
            
            //sin la arrow function, solo carga un pokemon
            setPokemons((pokemons)=>[...pokemons, pokemon]);
          });
    }
      
    getPokemons("https://pokeapi.co/api/v2/pokemon/");

  }, []);


  return (
    <>
      <h2>Peticiones Asincronas en Hooks</h2>
      {
        pokemons.map((el) => (
          <Pokemon key={el.id} name={el.name} avatar={el.avatar} />
        ))
      }
    </>
  );
}