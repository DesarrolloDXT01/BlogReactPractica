import React from 'react'
import useForm from '../../hooks/useForm'

export const Crear = () => {
  const {formulario, enviado, cambiado}= useForm();

  const guardaArticulo = (e) =>{
    e.preventDefault();
    let nuevoArticulo = JSON.stringify(formulario)
  }

  return (
    <div className='jumbo'>Crear
      <h1>Crear articulo</h1>
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
