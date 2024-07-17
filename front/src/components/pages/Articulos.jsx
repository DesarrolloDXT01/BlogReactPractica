import React from "react";
import { useState, useEffect } from "react";
import { Global } from "../../helpers/Global";
import { Peticion } from "../../helpers/Peticion";
import Listado from "./Listado";

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
      {cargando ? "Cargando...." :

        articulos.length >= 1 ? <Listado  articulos={articulos} setArticulos={setArticulos}/> : <h1>no hay articulos</h1>}

    </>
  );
};
export default Articulos;
