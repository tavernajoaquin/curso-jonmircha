import React, { useState } from "react";

// export default function Formularios() {
//   const [nombre, setNombre] = useState("");
//   const [sabor, setSabor] = useState("");
//   const [lenguaje, setLenguaje] = useState("");
//   const [terminos, setTerminos] = useState(false);

//   const handleSubmit = e => {
//     e.preventDefault();
//     alert("El formulario se ha enviado");
//   }

//   return (
//     <>
//       <h2>Formularios</h2>

//       <form onSubmit={handleSubmit}>
//         <label htmlFor="">Nombre:</label>
//         <input 
//         type="text"
//          id="nombre" 
//          name="nombre" 
//          value={nombre} 
//          onChange={(e)=>setNombre(e.target.value)} />
//          <p>Elige tu sabor js favorito:</p>
//          {/* con el mismo nombre se relacionan los distintos radios */}
//          <input
//           type="radio"
//           name="sabor"
//           id="vanilla"
//           value="vanilla"
//           onChange={(e)=>setSabor(e.target.value)} 
//           defaultChecked
//           />
//          <label htmlFor="vanilla">vanilla</label>
//          <input
//           type="radio"
//           name="sabor"
//           id="React"
//           value="React"
//           onChange={(e)=>setSabor(e.target.value)} />
//          <label htmlFor="React">React</label>
//          <input
//           type="radio"
//           name="sabor"
//           id="Angular"
//           value="Angular"
//           onChange={(e)=>setSabor(e.target.value)} />
//          <label htmlFor="Angular">Angular</label>
//          <input
//           type="radio"
//           name="sabor"
//           id="Vue"
//           value="Vue"
//           onChange={(e)=>setSabor(e.target.value)} />
//          <label htmlFor="Vue">Vue</label>
//          <input
//           type="radio"
//           name="sabor"
//           id="Svelte"
//           value="Svelte"
//           onChange={(e)=>setSabor(e.target.value)} />
//          <label htmlFor="Svelte">Svelte</label>
//          <p>Eligie tu lenguaje de programacion favorito</p>
//          <select name="lenguaje" onChange={(e)=>setLenguaje(e.target.value)}>
//           <option value="" defaultChecked>- - - </option>
//           <option value="js">JavaScript</option>
//           <option value="php">PHP</option>
//           <option value="python">Python</option>
//          </select>
//          <br />
//         <label htmlFor="terminos">Acepto terminos y condiciones</label>
//         <input type="checkbox" name="terminos" id="terminos" onChange={(e)=>setTerminos(e.target.checked)}/>
//         <br />
//         <input type="submit" />
//       </form>
//     </>
//   );
// }

export default function Formularios() {
  const [form, setForm] = useState({});

  const handleChange = e => {
    setForm({
      ...form, //ademas de lo q ya tenia el formulario
      [e.target.name]:e.target.value
    });
  }

  const handleChecked = e => {
    setForm({
      ...form, //ademas de lo q ya tenia el formulario
      [e.target.name]:e.target.checked, //esto es destructuracion
    });
  }

  const handleSubmit = e => {
    e.preventDefault();
    alert("El formulario se ha enviado");
  }

  return (
    <>
      <h2>Formularios</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="">Nombre:</label>
        <input 
        type="text"
         id="nombre" 
         name="nombre" 
         value={form.nombre} 
         onChange={handleChange} />
         <p>Elige tu sabor js favorito:</p>
         {/* con el mismo nombre se relacionan los distintos radios */}
         <input
          type="radio"
          name="sabor"
          id="vanilla"
          value="vanilla"
          onChange={handleChange} 
          defaultChecked
          />
         <label htmlFor="vanilla">vanilla</label>
         <input
          type="radio"
          name="sabor"
          id="React"
          value="React"
          onChange={handleChange} />
         <label htmlFor="React">React</label>
         <input
          type="radio"
          name="sabor"
          id="Angular"
          value="Angular"
          onChange={handleChange} />
         <label htmlFor="Angular">Angular</label>
         <input
          type="radio"
          name="sabor"
          id="Vue"
          value="Vue"
          onChange={handleChange} />
         <label htmlFor="Vue">Vue</label>
         <input
          type="radio"
          name="sabor"
          id="Svelte"
          value="Svelte"
          onChange={handleChange} />
         <label htmlFor="Svelte">Svelte</label>
         <p>Eligie tu lenguaje de programacion favorito</p>
         <select name="lenguaje" onChange={handleChange}>
          <option value="" defaultChecked>- - - </option>
          <option value="js">JavaScript</option>
          <option value="php">PHP</option>
          <option value="python">Python</option>
         </select>
         <br />
        <label htmlFor="terminos">Acepto terminos y condiciones</label>
        <input type="checkbox" name="terminos" id="terminos" onChange={handleChecked}/>
        <br />
        <input type="submit" />
      </form>
    </>
  );
}