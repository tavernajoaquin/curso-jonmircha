import React, { useState, useEffect } from 'react';


//valores default del formulario. se utiliza al iniciar, resetear y despues de insertar para limpiar
const initialForm = {
  name:"",
  constellation:"",
  id:null,
}

const CrudForm = ({createData, updateData, dataToEdit, setDataToEdit}) => {
  //las variables de los campos se guardan en el state "form"
  const [form, setForm] = useState(initialForm);

  //
  useEffect(() => {
    if(dataToEdit){

      setForm(dataToEdit);
    }else{
      setForm(initialForm);
    }
    
  }, [dataToEdit]);
  

  //si cambia un campo del form, se actualiza el estado
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }
  //al hacer submit
  const handleSubmit = (e) => {
    e.preventDefault(); //para evitar que se recargue la pagina

    //no insertar si los campos están vacios
    if(!form.name || !form.constellation){ 
      alert("datos incompletos");
      return;
    }

    //determinar si se crea un registro o se actualiza
    if(form.id===null){
      console.log("data al crear",form);
      createData(form); //funcion que viene del compobnente padre
                        //que a  su vez tiene a la "base de datos"
    }else{
      updateData(form);
    }
    
    handleReset();
  }
  //resetear el state del formulario
  const handleReset = (e) => {
    setForm(initialForm);
    setDataToEdit(null);
  }

  return (
    <div>
      <h3>{dataToEdit ? "Editar" : "Agregar"}</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" name='name' placeholder='Nombre' 
          onChange={handleChange} value={form.name}/>
          <input type="text" name='constellation' placeholder='Constelacion' 
          onChange={handleChange} value={form.constellation}/>
          <input type='submit' value="Enviar" />
          <input type='reset' value="Limpiar" onClick={handleReset}/>
        </form>
    </div>
  )
}

export default CrudForm