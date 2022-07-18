import CrudApp from "./components/CrudApp";
import CrudApi from "./components/CrudApi";
import React from 'react';


function App() {
  return (
    <>
      <h1>Ejercicios con react</h1>
      <CrudApi />
      <hr />
      <CrudApp />
    </>
  );
}

export default App;
