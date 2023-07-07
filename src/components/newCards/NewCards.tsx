import React from 'react'
import { useState } from "react"
import { ContainerNav, InternalContainerCards, LineBorder, MainContainerCards } from './newcards.syled'
import Card from 'react-bootstrap/Card';
import data from '../../../data.json';
import "./style.css"

const NewCards = () => {

    const [selectedPage, setSelectedPage] = useState(1);

    const handlePageClick = (pageNumber: any) => {
        setSelectedPage(pageNumber);
    };

    return (
        <>
            <MainContainerCards>
                <InternalContainerCards>
                    <ContainerNav>
                        <div className='links'>
                            <div className='itens' >
                                <a href="">Agências</a>
                                <a href="">Chatbot</a>
                                <a href="">Marketin Digital</a>
                                <a href="">Geração de Leads</a>
                                <a href="">Mídia Paga</a>
                            </div>
                            <div>
                                <span><b>Ordenar por</b></span>
                                <select style={{ border: "1px solid black", borderRadius: "20px", padding: "5px" }}>
                                    <option value="opcao1" data-criacao="2021-01-01">Data de Publicação</option>
                                </select>
                            </div>
                        </div>
                    </ContainerNav>
                    <LineBorder largura='91%' />
                    <div className='cards'>
                        {data.itens.map((item) => (
                            <Card key={item.id} style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={item.src} alt={item.nome} />
                                <Card.Body>
                                    <Card.Text>{item.descricao}</Card.Text>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                    <div className='cards'>
                        {data.itens.map((item) => (
                            <Card key={item.id} style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={item.src} alt={item.nome} />
                                <Card.Body>
                                    <Card.Text>{item.descricao}</Card.Text>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                    <div className='cards'>
                        {data.itens.map((item) => (
                            <Card key={item.id} style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={item.src} alt={item.nome} />
                                <Card.Body>
                                    <Card.Text>{item.descricao}</Card.Text>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                    <LineBorder largura='91%' style={{ marginTop: "15px" }} />
                    <div className="pages">
                        <div>
                            <span><b>Página</b></span>
                        </div>
                        <div className="pageItens">
                            <a  href="#"
                                className={selectedPage === 1 ? 'selected-page' : ''}
                                onClick={() => handlePageClick(1)}>
                                1
                            </a>
                            <a
                                href="#"
                                className={selectedPage === 2 ? 'selected-page' : ''}
                                onClick={() => handlePageClick(2)}
                            >
                                2
                            </a>
                            <a
                                href="#"
                                className={selectedPage === 3 ? 'selected-page' : ''}
                                onClick={() => handlePageClick(3)}
                            >
                                3
                            </a>
                            <a
                                href="#"
                                className={selectedPage === 4 ? 'selected-page' : ''}
                                onClick={() => handlePageClick(4)}
                            >
                                4
                            </a>
                        </div>
                    </div>



                </InternalContainerCards>


            </MainContainerCards>



        </>

    )
}



export default NewCards
