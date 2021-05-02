import React from 'react'
import { FooterStyled } from '../styles/index';
import Logo from '../components/Logo/index';

const Footer = () => {
  return (
    <FooterStyled>
      <Logo />
      <p>&copy; All rights reserved {new Date().getFullYear()}</p>
    </FooterStyled>
  )
}

export default Footer
