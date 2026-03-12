import React from 'react'
import "./Anuncio.css"

const Anuncio = () => {
  return (
    <div className='anuncio'>
        <div className='left-anuncio'>
            <p className="linha-anuncio">Aulas de música para quem não quer só copiar.</p>
            <p className="linha-anuncio">Crie! Invente! Improvise! Componha! Nós damos a hora,</p>
            <p className="linha-anuncio">o local, o conhecimento e a diversão para você evoluir </p>
            <p className="linha-anuncio">musicalmente.</p>
        </div>
        <div className='right-anuncio'>
            <h2 className='anuncio-marque'>Ligue já e marque a primeira aula GRATUITA</h2>
            <p className='anuncio-numero'>011-4508-7664</p>
        </div>

    </div>
  )
}

export default Anuncio
