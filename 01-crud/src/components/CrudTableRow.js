import React from 'react'

const CrudTableRow = ({el, deleteData, setDataToEdit}) => {

  //destructuras el elemento en nombre, constelacion e id
  //permite usar als variables sin usar el.name
  let{name, constellation, id} = el; 
  
  return (
    <tr>
      <td>{name}</td>
      <td>{constellation}</td>
      <td>
        <button onClick={() => setDataToEdit(el)}>Editar</button>
        <button onClick={() => deleteData(id)}>Eliminar</button>
      </td>
  </tr>
  )
}

export default CrudTableRow