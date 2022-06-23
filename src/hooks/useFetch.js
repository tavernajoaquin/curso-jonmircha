import { useState, useEffect } from 'react';

//Esto es una funcion, no un componente funcional

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null)


  useEffect(()=>{

    const getData = async (url) => {
      try {
        let res = await fetch(url); //esperamos la respuesta
        
        if(!res.ok){ //si la respuesta es un error
          //retornar el error
          throw { 
            err:true, 
            status:res.status, 
            statusText: !res.statusText ? "Ocurrio un error": res.statusText
          };
        }
        
        let data = await res.json();

        setIsPending(false);
        setData(data);
        setError({err: false});

      } catch (err) {

        setIsPending(true);
        setError(err);

      }
    }
    
    getData(url);

  },[url]);//el useEffect va a hacerse cuando haya un cambio en la url

  return { data, isPending, error}
  //shorthand ECMAScript 2015
};