import React from 'react'
import "./Header.css"
import { imagens, cursosAssets } from '../../../assets/assets'

const Header = () => {
  return (
    <div className='header'>
      <div className='img-division'>
        <img src={imagens.guitarra} alt="" />
        <img src={imagens.saxofonista} alt="" />
        <img src={cursosAssets.teclado} alt="" />
      </div>

      <div className='header-table'>
        <h4>Nos cursos de Canto ou Instrumento são oferecidas
duas aulas por semana de 1h de duração cada, sendo uma individual e outra coletiva.
Totalizando 8h de aula
por mês!</h4>
        <p><span>Canto</span>, Guitarra, <span>Violão</span>, Piano, Teclado, <span>Baixo</span>, Bateria,

     Cavaquinho, Percussão, <span>Violino</span>, Trompete, <span>Gaita</span>,

                     Saxofone, <span>Flauta</span>, Musicalização Infantil,

                 Preparatório para Vestibular em Música</p>
      </div>
    </div>
  )
}

export default Header
