
import React, { useState } from 'react';

import CrudForm from './CrudForm';
import { CrudTable } from './CrudTable';

 //valor inicial de la base de datos
const initialDB = [
      {
        "id": 1,
        "name": "Seiya",
        "constellation": "Pegaso"
      },
      {
        "id": 2,
        "name": "Shiryu",
        "constellation": "Dragón"
      },
      {
        "id": 3,
        "name": "Hyoga",
        "constellation": "Cisne"
      },
      {
        "id": 4,
        "name": "Shun",
        "constellation": "Andrómeda"
      },
      {
        "id": 5,
        "name": "Ikki",
        "constellation": "Fénix"
      },

]; 

const CrudApp = () => {
  //la "base de datos" inicia con el array de objetos anterior
  const [db, setDb] = useState(initialDB);

  //state para avisar cuando es data para editar o para insertar
  const [dataToEdit, setDataToEdit] = useState(null);

  //inserta el objeto form que llega del formulario en la "base de datos"
  const createData = (data) => {
    data.id = Date.now();
    setDb([...db,data]);
  };

  const updateData = (data) => {
    let newData = db.map( //por cada elemento de la base de datos
      //si son exactamente iguales, se cambia por data
      //si no, se mantiene el elemento como está
      (el => el.id === data.id ? data : el)
      )
    //acá iria el fetch a la DB
    setDb(newData);
  };

  const deleteData = (id) => {
    //window.confirm porque confirm solo lo puede confundir con una funcion
    let isDelete = window.confirm(`Estas seguro de eliminar el registro de ${id}?`);

    if(isDelete){
      //si es distinto, pasa al nuevo array
      let newData = db.filter(el => el.id !== id);
      setDb(newData);
    }else{
      return;
    }
    
  };

  return (
    <div>
      <h2>CRUD APP</h2>
      <CrudForm 
      createData={createData} updateData={updateData} 
      dataToEdit={dataToEdit} setDataToEdit={setDataToEdit}/>
      <CrudTable data={db} deleteData={deleteData} 
      setDataToEdit={setDataToEdit}/>
    </div>
  )
}

export default CrudApp