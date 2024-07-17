import React, { useState } from 'react'
import useForm from '../../hooks/useForm'
import Peticion from '../../helpers/Peticion'
import Global from '../../helpers/Global'


export const Crear = () => {
  const {formulario, enviado, cambiado}= useForm();
  const [resultado, setResultado] = useState("");

  const guardarArticulo = async(e) =>{
    e.preventDefault();
    let nuevoArticulo = formulario;

    const {datos, cargando} = await Peticion(Global.url + "crear", "POST", nuevoArticulo);
    if (datos.status === "succs") {
      setResultado("Guardado");
    }else{
      setResultado("Error")
    }
  }

  return (
    <div className='jumbo'>Crear
      <h1>Crear articulo</h1>
      <strong>{resultado == "Guardado" ? "Articulo guardado" : "Error"}</strong>
      <form className='formulario' onSubmit={enviado}>

        <div className='form-group'>
          <label htmlFor='titulo'> Titulo</label>
          <input type='text' name='titulo' onChange={cambiado}/>
        </div>

        <div className='form-group'>
          <label htmlFor='contenido'> Contenido</label>
          <textarea type='text' name='contenido'  onChange={cambiado}/>
        </div>

        <div className='form-group'>
          <label htmlFor='file0'> Imagen</label>
          <input type='file' name='file0' id='file'  onChange={cambiado}/>
        </div>

        <input type='submit' value='guardar' className='btn btn-success'/>
      </form>
    </div>
  )
}

export default Crear
