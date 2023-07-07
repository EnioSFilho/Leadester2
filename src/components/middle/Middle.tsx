import React from 'react'
import { ContainerMiddle } from './middle.styled'
import "./style.css"
import { LineBorder } from '../newCards/newcards.syled'

const Middle = () => {
    return (
        <>

            <ContainerMiddle>

                <div>
                    <img src="/comparativo.png" alt="ImageContainer" />
                </div>

                <div className='dizeres'>
                    <div>
                        <h1>Pronto para triplicar sua</h1>
                        <h1><b>Geração de Leads ?</b></h1>
                        <p>Criação e ativação em <b>4 minutos.</b></p>
                    </div>

                    <div>

                        <LineBorder largura='100%' style={{ marginTop: "10px" }} />
                    </div>

                    <div className='middleBotton'>
                        <div className='middleTextBotton'>

                            <a href="">VER DEMONSTRAÇÃO</a>

                        </div>

                        <div>

                            <img src="/selo.png" alt="Selo" />

                        </div>
                    </div>
                    <div className='middleFlex'>

                        <div className='middleFinaly'>
                        <img src="/cartao.webp" alt="cartaoDeCredito" />
                        <p><b>Não </b>é necessário Cartão</p>
                        </div>

                        <div className='middleUltimate'>

                            <p>|</p>
                            <img src="/stars.webp" alt="stars" />
                            <p>4.9/5 média de satisfação</p>


                        </div>
                    </div>

                </div>




            </ContainerMiddle>

        </>
    )
}

export default Middle
