import styled from "styled-components"

interface ContainerTopProps{
    backGround: string;
    
}
export const ContainerTop = styled.header<ContainerTopProps>`
width: 100%;
height: 15vh;
display: flex;
justify-content: center;
align-items: center;
background-color: ${(props) => props.backGround}

`