import React from 'react'

const Listado = ({articulos, setArticulos}) => {
  return (
    articulos.map((articulo) => (
        <article key={articulo._id} className="articulo-item">
          <div className="mascara">
            <img src="https://picsum.photos/1000" />
          </div>
          <div className="datos">
            <h3 className="title">{articulo.titulo}</h3>
            <p className="description">{articulo.contenido}</p>
            <button className="edit">Editar</button>
            <button className="delete">Borrar</button>
          </div>
        </article>
      ))
  )
}

export default Listado