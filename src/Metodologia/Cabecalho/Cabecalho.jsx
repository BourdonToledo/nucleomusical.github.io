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
            <p>Os cursos de Canto ou Instrumento são divididos em 4 Níveis de 1 ano de duração cada, com 2 módulos de 6 meses. Nível Iniciante, Básico, Intermediário e Avançado. As avaliações sobre o desenvolvimento musical de cada aluno acontecem aula a aula e, principalmente, nas apresentações e eventos, gerando um boletim semestral de aproveitamento para que alunos e pais acompanhem a evolução. </p>
        </div>
    </div>
  )
}

export default Cabecalho
