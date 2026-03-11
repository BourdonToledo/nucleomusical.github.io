import React from 'react'
import "./Footer.css"
import { imagens } from '../../assets/assets'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="horarios">
                <h4>Horario de Funcionamento</h4>
                <div className='tabela-horarios'>

                    <div>

                        <p>Segunda - Quinta</p>
                        <p>Sexta  </p>
                        <p>Sabado - Domingo </p>
                    </div>
                    <div>
                        <p>9h - 21h</p>
                        <p>9h - 19h</p>
                        <p>9h - 13h</p>
                    </div>

                </div>
            </div>
            <div className="adress">
                <h4>Endereço</h4>
                <p>R.Pedro Doll, 280 - Santana

                    São Paulo, SP

                    

                </p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3220.807977650777!2d-46.63134882525301!3d-23.49136577884799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef635b2d211ef%3A0x705b18278f0edb40!2sR.%20Pedro%20Doll%2C%20280%20-%20Santana%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2002404-000!5e1!3m2!1spt-BR!2sbr!4v1772898648605!5m2!1spt-BR!2sbr" ></iframe>

            </div>
            <div className='contacts'>
                
                <h4>Endereço</h4>

                <p> nucleomusical@yahoo.com.br </p>
                    
                <p>    Tel: 011-4508-7664 </p>
                <div className="socials">
                    <a href="www.facebook.com"> <img src={imagens.facebookLogo} alt="" /></a>
                    <a href="www.twitter.com"> <img src={imagens.googlePlusIcon} alt="" /></a>
                    <a href="https://www.instagram.com/ulissesbourdon_official/"> <img src={imagens.instaLogo} alt="" /></a>
                    <a href="www.twitter.com"> <img src={imagens.twitterIcon} alt="" /></a>
                </div>
            </div>
        </div>
    )
}

export default Footer

