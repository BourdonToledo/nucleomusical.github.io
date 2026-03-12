import React from 'react'
import { cursosAssets } from '../../../assets/assets'
import "./Cabecalho.css"

const Cabecalho = () => {
  return (
    <div className='niv-head'> 
      <div className='nivel'>
            <img src={cursosAssets.partitura} alt="" />
            <div className='titulo-metodo'>
                <h1>Metodologia</h1>
            </div>
            <p>No primeiro nível, Iniciante, o aluno aprende as posições básicas, o repertório fácil para começar fazendo um som e se habituar com o instrumento. Um pouco de teoria, de brincadeiras e jogos para criar e se divertir com a música. </p>
        </div>
    </div>
  )
}

export default Cabecalho
