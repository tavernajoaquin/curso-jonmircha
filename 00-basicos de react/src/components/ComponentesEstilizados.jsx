import React from "react";
import styled from "styled-components";


export default function ComponentesEstilizados(){

  const MyH3 = styled.h3`
    padding: 2rem;
    text-align: center;
    background-color: black;
  `;

  return(
    <>
      <h2>Styled-Components</h2>
      <MyH3>Hola soy un h3 estilizado con styled-components</MyH3>
    </>
  )

}