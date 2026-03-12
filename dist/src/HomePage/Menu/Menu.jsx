import React from 'react'
import "./Menu.css"
import { imagens } from '../../../assets/assets';
import { Link } from 'react-router-dom';

const Menu = () => {
  console.log("Menu");
  return (

    <div >
        <ul className='menu'>
            <p className='cursos'> 
              <Link to={"/Cursos"}> Cursos </Link> 
            </p>

            <p className='metodo'>
              <Link to={"/Metodo"}>Metodologia </Link> 
            </p>
            <p className='professores'>
              <Link to={"/Planos"}>Planos </Link>
            </p>
        </ul>
        
    </div>
  )
}

export default Menu
