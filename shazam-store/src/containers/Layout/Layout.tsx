import React, {FunctionComponent, useState} from 'react';
import Header from '../../components/Header';
import HamburgerButton from '../../HamburgerButton';
import { SuperContainer } from '../../styles';
import GlobalStyle from '../../styles/global';
import Aside from '../../components/Aside/index';
import Footer from '../../Footer';
import Hero from '../../components/Hero/index';

const Layout : FunctionComponent = ({children}) => {

  const [isActiveBurgerButton, setActiveBurgerButton ] = useState(false);

  return (
    <SuperContainer>
      <GlobalStyle />
      <Header />
      <Hero />
      <HamburgerButton isActiveBurgerButton={isActiveBurgerButton} setActiveBurgerButton={setActiveBurgerButton}/>
       <Aside  isActiveBurgerButton={isActiveBurgerButton} />
      {children}
      <Footer />
    </SuperContainer>
  )
}

export default Layout
