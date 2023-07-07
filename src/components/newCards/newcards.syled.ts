import styled from "styled-components"

export const MainContainerCards = styled.div`

display: flex;
justify-content: center;
width: 100%;
height: 120vh;

@media (max-width: 1640px){

    height: 150vh;
}

@media (max-width: 1234px){

height: 250vh;
}

@media (max-width: 819px){

height: 310vh;
}

`

export const InternalContainerCards = styled.div`

width: 70vw;
height: 100vh;


`

export const ContainerNav = styled.div`

display: flex;
justify-content: space-around;
align-items: center;
margin-top: 20px;
width: 100%;
height: 20vh;
background-color: white;

`

interface LineBorderProps{

    largura: string
}

export const LineBorder = styled.div<LineBorderProps>`

margin: 0 auto;
margin-top: -15px;
width: ${(props) => props.largura};
border: 1px solid rgb(196, 202, 209);

@media (max-width: 556px) {
    display: none;
}
`