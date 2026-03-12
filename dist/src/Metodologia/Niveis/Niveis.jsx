import React from 'react'
import "./Niveis.css"
import { cursosAssets, imagens } from '../../../assets/assets'

const Niveis = () => {
  return (
    <div className='niveis'>
        <div className='nivel'>
            <img src={cursosAssets.iniciante} alt="" />
            <div className='legenda'>
                <p>Iniciante</p>
            </div>
            <p>No primeiro nível, Iniciante, o aluno aprende as posições básicas, o repertório fácil para começar fazendo um som e se habituar com o instrumento. Um pouco de teoria, de brincadeiras e jogos para criar e se divertir com a música. </p>
        </div>
        <div className='nivel'>
            <img src={cursosAssets.mid} alt="" />
            <div className='legenda'>
                <p>Nivel Básico</p>
            </div>
            <p>Segundo Nível, escalas, ritmo e compasso se unem para as primeiras improvisações, solos, composições e criações musicais. O repertório começa a ficar mais complexo e interessante. A teoria começa a fazermais sentido na prática musical ajudando a aluno a entender por dentro suas próprias criações, músicas preferidas e temas do conteúdo curricular</p>
        </div>
        <div className='nivel'>
            <img src={cursosAssets.violino} alt="" />
            <div className='legenda'>
                <p>Nivel Itermediário</p>
            </div>
            <p>Nesse nível, o aluno começa a se familiarizar com um repertório mais rebuscado, lendo cifras, tablaturas e partitura, criando improvisações e solos, compondo suas próprias canções. Nas aulas coletivas o repertório da banda fica mais extenso e interessante, fazendo arranjos, mudando timbres e analisando harmonicamente músicas conhecidas.</p>
        </div>
        <div className='nivel'>
            <img src={cursosAssets.avancado} alt="" />
            <div className='legenda'>
                <p>Nivel Avançado</p>
            </div>
            <p>No Avançado, o aluno tem acesso a conteúdos de análise harmonica, composição e improvisação que o preparam para ser um músico profissional e para um vestibular de música. Leitura,arranjo, produção musical, gravação e shows se alternam para que o estudante de música tenha uma visão completa sobre a profissão músico.</p>
        </div>
      
      
    </div>
  )
}

export default Niveis
