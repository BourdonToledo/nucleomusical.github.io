import React, { useState } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom';
import { imagens } from '../../assets/assets';

const Navbar = () => {

  const [menuClick, setMenuClick] = useState("home");
  const [menuHover, setMenuHover] = useState("home");



  return (
    <div className='nav'>
      <img src={imagens.logo} alt="" />
      <ul>
        
        

        <Link
          to={"/"}
          onClick={() => setMenuClick("home")}
          onMouseEnter={() => { setMenuHover("home") }}
          onMouseLeave={() => { setMenuHover("none") }}
          className={
            menuClick === "home" || menuHover === "home" ?
              "active" : "inactive"
            }
          >

          Home
        </Link>

        <Link
          to={"/Cursos"}
          onClick={() => setMenuClick("cursos")}
          onMouseEnter={() => { setMenuHover("cursos") }}
          onMouseLeave={() => { setMenuHover("none") }}
          className={
            menuClick === "cursos" || menuHover === "cursos" ?
              "active" : "inactive"
            }
          >

          Cursos
        </Link>

        <Link
          to={'/Metodo'}
          onClick={() => setMenuClick("metodologia")}
          onMouseEnter={() => { setMenuHover("metodologia") }}
          onMouseLeave={() => { setMenuHover("none") }}
          className={
            menuClick === "metodologia" || menuHover === "metodologia" ?
              "active" : "inactive"}>

          Metodologia
        </Link>

        <Link
         to={'/Planos'}
          onClick={() => setMenuClick("matricula")}
          onMouseEnter={() => { setMenuHover("matricula") }}
          onMouseLeave={() => { setMenuHover("none") }}
          className={
            menuClick === "matricula" || menuHover === "matricula" ?
              "active" : "inactive"
            }
          >

          Matrícula e Planos
        </Link>

        <Link
          to={'/Sobre'}
          onClick={() => setMenuClick("sobre")}
          onMouseEnter={() => { setMenuHover("sobre") }}
          onMouseLeave={() => { setMenuHover("none") }}
          className={
            menuClick === "sobre" || menuHover === "sobre" ?
              "active" : "inactive"
            }
          >

          Sobre
        </Link>

      </ul>

    </div>
  )
}

export default Navbar
