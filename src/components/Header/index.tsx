import React from 'react'
import Navbar from '../Navbar'
import { Container, HeaderContainer } from '../../styles/index';
import SmallNavbar from '../SmallNavbar/index';
import SearchInput from '../SearchInput/index';
import Logo from '../Logo';

const Header = () => {
  return (
    <HeaderContainer>
      <Container>
        <Logo />
        <SearchInput />
      </Container>
      <Navbar />
      <SmallNavbar />
    </HeaderContainer>
  )
}

export default Header;
