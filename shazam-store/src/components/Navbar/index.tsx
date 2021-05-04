import React from 'react';
import { Nav, Ulist, NavLinkStyled } from '../../styles/index';

const Navbar = () => {
  return (
    <Nav>
      <Ulist>
        <li>
          <NavLinkStyled to="/">Home</NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="/categorias">Categorias</NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="/ofertas">Ofertas</NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="/contacto">Contacto</NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="/nosotros">Nosotros</NavLinkStyled>
        </li>
      </Ulist>
    </Nav>
  )
}

export default Navbar;
