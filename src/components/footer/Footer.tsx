import React from 'react'
import { FooterContainer, OptionsContainer } from './footer.styled'
import "./style.css"
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa6";
import { LineBorder } from '../newCards/newcards.syled';

const Footer = () => {
  return (
    <>
      <FooterContainer>

        <div className='logoFooter'>
          <img src="/logo.png" alt="LogoLeadester" id='logo' />
        </div>

        <div className='logoFooterText'>
          <p>Transformado visitantes em clientes.</p>
        </div>

        <div className='menu'>

          <div className='primeiro'>

            <h3><b>Links Principais</b></h3>
            <br></br>
            <p>Home</p>
            <p>Ferramenta</p>
            <p>Preços</p>
            <p>Contato</p>

          </div>

          <div className='primeiro'>

            <h3><b>Cases</b></h3>
            <br></br>
            <p>Geração de Leads B2B</p>
            <p>Geração de Leads em Software</p>
            <p>Geração de Leads em Imobiliária</p>
            <p>Cases de Sucesso</p>

          </div>


          <div className='primeiro'>

            <h2><b>Materiais</b></h2>
            <br></br>
            <p>Blog</p>
            <p>Parceria com Agências</p>
            <p>Guia Definitivo do Marketing</p>
            <p>Materiais Gratuitos</p>

          </div>

          <div>

            <h2><b>Siga a Leadester</b></h2>
            <br></br>

            <div className='midias'>
              <div>
                <FaLinkedin />
              </div>

              <div>
                <FaFacebook/>
              </div>

              <div>
                <FaInstagram/>
              </div>

            </div>
            <br />
            <p><b>E-mail: </b>contato@leadester.com.br</p>
            <p><b>Telefone: </b>(42) 98828-9851</p>
            

          </div>

        </div>


      <LineBorder largura='100%' style={{marginTop: "50px"}}/>

      <div className='rodape'>

      <div>

      <p>Copyright © 2015 - 2022 Todos os direitos reservados | <a href="" style={{color: "rgb(43, 116, 212)"}}>Leadester</a></p>

      </div>

      <div>

      <p>Rua José Loureiro, 464 - Centro - Curitiba PR - CEP: 80010-000 | Termos de uso</p>

      </div>


      </div>



      </FooterContainer>



    </>

  )
}

export default Footer
