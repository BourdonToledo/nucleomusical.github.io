import React from 'react'
import { imagens } from '../../assets/assets'
import './Planos.css'

const Planos = () => {
    return (
        <div className='planos'>

            <div className='textos' >
                <p>SEM TAXA DE MATRICULA!</p>
                <p className='scnd-part'>SEM TAXA DE MATERIAL DIDÁTICO!</p>
                <h3> Temos tres tipos de curso:</h3>
                <div className='tabela-planos'>

                        <div>
                            <p> PROMOCIONAL </p>
                            <p> 4 aulas Individuais por mes </p>
                            <p> R$ 390,00 mensais </p>
                        </div>
                        <div>
                            <p> CURSO COMPLETO</p>
                            <p> 8 aulas por mes, divididas em 2 aulas semanais, sendo uma individual e uma coletiva </p>
                            <p> a partir de R$ 410 por mes </p>
                        </div>
                        <div>
                            <p> MUSICALIZAÇÃO INFANTIL </p>
                            <p> abaixo de 7 anos 4 aulas coletivas mensais </p>
                            <p> R$ 390 por mes</p>
                        </div>
                    <div className='descontos'>
                        <p> 20% de desconto para os melhores alunos</p>
                        <hr />
                        <p> 20% de desconto no 2° curso</p>
                        <hr />
                        <p> 20% de desconto para pessoas da mesma família</p>
                        <hr />
                        <p> 20% de desconto para estudantes do ensino público (1° ou 2° grau)</p>
                    </div>
                    
                    <p>Aceitamos dinheiro, pix e cartões de Débito ou Crédito.</p>
                </div>
            </div>
        </div>
    )
}

export default Planos
