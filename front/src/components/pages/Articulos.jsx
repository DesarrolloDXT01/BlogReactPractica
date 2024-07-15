import React from "react";
import { useState, useEffect } from "react";
import { Global } from "../../helpers/Global";
import { Peticion } from "../../helpers/Peticion";

export const Articulos = () => {
  const [articulos, setArticulos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    getArticulos();
  }, []);

  const getArticulos = async () => {
    const url = Global.url + "articulos";
    const { datos, cargando } = await Peticion(url, "GET");

    if (datos.status === "success") {
      setArticulos(datos.articulos);
    }
    setCargando(false);
  };
  return (
    <>
      {cargando ? (
        "Cargando...."
      ) : articulos.length >= 1 ? (
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
      ) : (
        <h1>no hay articulos</h1>
      )}
    </>
  );
};
export default Articulos;
