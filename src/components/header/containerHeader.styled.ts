import styled from "styled-components"

interface ContainerHeaderProps{
    backGround: string;
}

export const ContainerHeader = styled.header<ContainerHeaderProps>`
width: 100%;
height: 70vh ;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background-color: ${(props) => props.backGround};
`


