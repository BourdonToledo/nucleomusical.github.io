import React from 'react'
import "./TabelaCursos.css"
import { cursosAssets } from '../../../assets/assets'

const TabelaCursos = () => {
  return (
    <div className='tabela-cursos'>
        <div className="unidade-tabela">
            <img src={cursosAssets.guitar} alt="" />
            <div>
                <h2>As Aulas Individuais <span>(1h + aula coletiva)</span></h2>
                <p>Você aprende o instrumento de sua preferência com repertório eclético, solos, improvisações, entendendo a harmonia e o arranjo, unindo leitura e percepção, teoria e criação, compondo músicas próprias para lançar-se no mercado musical ou simplesmente tirar um lazer.</p>
            </div>
        </div>
        <hr />

        <div className="unidade-tabela">
            <img src={cursosAssets.violino} alt="" />
            <div>
                <h2>As Aulas Coletivas <span>(1h + aula coletiva)</span></h2>
                <p>Teoria musical aplicada a prática, organizamos repertórios, ensaiamos em grupo para shows e eventos que acontecem uma vez por mês no próprio Núcleo Musical ou em outro local, variandoasapresentações em teatros, bares,cafés ou na própria varanda!</p>
            </div>
        </div>
        <hr />

        <div className="unidade-tabela">
            <img src={cursosAssets.tambor} alt="" />
            <div>
                <h2>Musicalização Infantil <span>(1h)</span></h2>
                <p>Aulas em grupo para crianças de 3 a 6 anos onde elas experimentam os intrumentos, vasculham os timbres, brincam com a música. Conceitos básicos e experimentações onde os pequenos podem explorar o universo dos sons e da música.</p>
            </div>
        </div>
        <hr />
        
        <div className="unidade-tabela">
            <img src={cursosAssets.teclado} alt="" />
            <div>
                <h2>Curso Preparatório para Vestibular em Música</h2>
                <p>Aquivocê pode conhecercomo são as provas específicas de música em diferentes universidades, estudar e aprender os conteúdos necessários para garantir sucesso no vestibular e se tornar um profissional da música.</p>
            </div>
        </div>
        <hr />

        <div className="unidade-tabela">
            <img className='img-eventos' src={cursosAssets.eventos} alt="" />
            <div>
                <h2>Eventos</h2>
                <p>O Núcleo de Criação Musical realiza shows e apresentações uma vêz por mês em diferentes locais para que os alunos possam treinar estar no palco, acostumar com a performance aliada a boa qualidade musical. Por isso, já somos conhecidos por nossos eventos alegres que unem as famílias e as diferentes faixas etárias, onde os alunos mostram suas próprias composições ou canções bem conhecidas do público com improviso e criatividade</p>
            </div>
        </div>

        
      
      <div className="right-info">

        
        </div>  
    </div>

    )
}

export default TabelaCursos
