import React from 'react'
import {Link} from 'react-router-dom'

export const Inicio = () => {
  return (
    <div className='jumbo'>
      <h1>Blog con react</h1>
      <p> mern stack</p>
      <Link to="/articulos" className='button'> Ver los articulos</Link>
    </div>
  )
}

export default Inicio