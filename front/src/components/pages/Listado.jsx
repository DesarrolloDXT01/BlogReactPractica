import React from 'react'
import { Global } from '../../helpers/Global'
import { Peticion } from '../../helpers/Peticion'

const Listado = ({ articulos, setArticulos }) => {

  const eliminar = async (id) => {
    let { datos } = await Peticion(Global.url + "articulo/" + id, "DELETE");

    if (datos.status === "success") {
      let articulosActualizados = articulos.filter(articulo => articulo._id !== id);
      setArticulos(articulosActualizados)
    }

  }
  return (
    articulos.map((articulo) => (
      <article key={articulo._id} className="articulo-item">
        <div className="mascara">
          {articulo.imagen != 'default.png' && <img src={Global.url + "imagen/" + articulo.imagen} />}
          {articulo.imagen == 'default.png' && <img src="https://picsum.photos/1000" />}
        </div>
        <div className="datos">
          <h3 className="title">{articulo.titulo}</h3>
          <p className="description">{articulo.contenido}</p>
          <button className="edit">Editar</button>
          <button className="delete" onClick={() => {
            eliminar(articulo._id)
          }}>Borrar</button>
        </div>
      </article>
    ))
  )
}

export default Listado