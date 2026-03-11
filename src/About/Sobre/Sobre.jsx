import React from 'react'
import './Sobre.css'
import { imagens } from '../../../assets/assets'

const Sobre = () => {
    return (
        <div className='sobre'>
            <div className='sobre-img'>
                <h2>Sobre</h2>
                <img className='' src={imagens.sobre} alt="" />
                <img src={imagens.sobre2} alt="" />
            </div>
            <div className='meta-hist'>
                <div>
                    <h2>Meta</h2>
                    <p>Ensinar música com amor, respeito e criatividade, valorizando a expressão, a disciplina e o entendimento próprio de cada aluno para que ele tenha prazer fazendo e criando música sozinho e em grupo. Assim, acreditamos que o aluno se fortalece emocionalmente, cria confiança em si mesmo e interage de forma saudável e criativa.</p>
                </div>
                <div>
                    <h2>Histórico</h2>
                    <p>Nossa escola foi fundada em 2013 com o amadurecimento da metodologia de criação desenvolvida por Ulisses Bourdon.

                        Além disso, a necessidade de um espaço de pesquisa e composição musical aliada a necessidade de respeito ao profissional da música e da pedagogia fez nascer o projeto do Núcleo Musical. Original e sem par até hoje no mundo.</p>
                </div>

            </div>

            <hr />
            <div className='fundador'>
                <div className='fund-descr'>

                    <h2>Sobre o Fundador</h2>
                    <p>Ulisses Bourdon é formado em Música pela UNICAMP (2001). Estudou música com Arrigo Barnabé, Ciro Pereira, Marco Angi. Cursou teatro, Circo e Commedia dell'Arte com Tiche Vianna. Cantou e tocou em bandas de rock, blues, MPB, samba, Samba Rock, Jazz em São Paulo, interior e Salvador. Compôs e gravou um disco próprio: Prelúdio Lúdico. Toca nas bandas: Baiacu Jazz Orquestra, Baleia Krill e Pano pra Manga. Atualmente está gravando um novo trabalho próprio.</p>
                </div>
                <img src={imagens.fundador} alt="" />
                <div className='fund-img'></div>

            </div>
        </div>
    )
}

export default Sobre
