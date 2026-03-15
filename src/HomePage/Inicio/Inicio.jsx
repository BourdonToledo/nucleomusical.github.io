import React from 'react'
import "./Inicio.css"
import { imagens } from '../../../assets/assets'


const Inicio = () => {
  return (
    <div className='encapsula'>

    <div className='inicio'>
        <img src={imagens.homeImg} alt="" />
        <div className='apresentacao'>
            <h2 className='titulo'> Aprender criando </h2>
            <p> Aprenda mais criando musicas de sua prorpia autoria, melhorando seu entendimento geral de musica</p>
        </div>
    </div>
    </div>
  )
}

export default Inicio
