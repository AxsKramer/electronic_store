import React from 'react'
import { AsideMenu, Container, Ulist } from '../../styles'
import { NavLinkStyled, ListItem } from '../../styles/index';

const Aside = ({isActiveBurgerButton} : any) => {
  return (
    <AsideMenu isOpen={isActiveBurgerButton}>
      <Container>
        <Ulist direction='column' >
          <ListItem>
            <NavLinkStyled to="/">Home</NavLinkStyled>
          </ListItem>
          <ListItem>
            <NavLinkStyled to="/categories">Categories</NavLinkStyled>
          </ListItem>
          <ListItem>
            <NavLinkStyled to="/offers">Offers</NavLinkStyled>
          </ListItem>
          <ListItem>
            <NavLinkStyled to="/contact">Contact</NavLinkStyled>
          </ListItem>
          <ListItem>
            <NavLinkStyled to="/about">About</NavLinkStyled>
          </ListItem>
        </Ulist>
      </Container>
    </AsideMenu>
  )
}

export default Aside
