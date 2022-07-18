import React from 'react'
import CrudTableRow from './CrudTableRow'

export const CrudTable = ({data, deleteData, setDataToEdit}) => {
  
  return (
    <div>
      <h3>Tabla de datos</h3>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Constelación</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.lenght===0 ? 
          (
            <tr><td colSpan='3'>Sin Datos</td></tr>
          ):(
            data.map((el) => <CrudTableRow key={el.id} el={el} 
            setDataToEdit={setDataToEdit} deleteData={deleteData} />)
          )}
        </tbody>
      </table>
    </div>
  )
}
