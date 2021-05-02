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
          <NavLinkStyled to="/categories">Categories</NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="/offers">Offers</NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="/contact">Contact</NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="/about">About</NavLinkStyled>
        </li>
      </Ulist>
    </Nav>
  )
}

export default Navbar;
