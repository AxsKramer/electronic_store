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
            <NavLinkStyled to="/categorias">Categories</NavLinkStyled>
          </ListItem>
          <ListItem>
            <NavLinkStyled to="/ofertas">Ofertas</NavLinkStyled>
          </ListItem>
          <ListItem>
            <NavLinkStyled to="/contacto">Contacto</NavLinkStyled>
          </ListItem>
          <ListItem>
            <NavLinkStyled to="/nosotros">Nosotros</NavLinkStyled>
          </ListItem>
        </Ulist>
      </Container>
    </AsideMenu>
  )
}

export default Aside
