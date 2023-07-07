import React from 'react'
import 'tailwindcss/tailwind.css'
import { ContainerTop } from './HeaderTop.styled'


const HeaderTop = () => {
  return (
    <>
    <ContainerTop backGround='white'>
        <img src="/logo.png" alt="Logo" />                
    </ContainerTop>
    </>
  )
}

export default HeaderTop
