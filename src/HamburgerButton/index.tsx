import React from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import { HambugerButton } from '../styles/index';

const HamburguerMenu = ({isActiveBurgerButton, setActiveBurgerButton} : any) => {
  return (
    <HambugerButton onClick={() => setActiveBurgerButton(!isActiveBurgerButton)}>
      <GiHamburgerMenu />
    </HambugerButton>
  )
}

export default HamburguerMenu;
