import React from "react";
import { Nav, Ulist, NavLinkStyled } from "../../styles/index";

const Navbar = () => {

  const navLinkAvtiveStyle : React.CSSProperties = {
    fontWeight: "bold",
    color: "#004e92",
    background: "white",
    borderRadius: '5px',
  }

  return (
    <Nav>
      <Ulist>
        <li>
          <NavLinkStyled
            activeStyle={navLinkAvtiveStyle}
            exact
            to="/"
          >
            Home
          </NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled
            activeStyle={navLinkAvtiveStyle}
            to="/categorias"
          >
            Categorias
          </NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled
            activeStyle={navLinkAvtiveStyle}
            to="/ofertas"
          >
            Ofertas
          </NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled
            activeStyle={navLinkAvtiveStyle}
            to="/contacto"
          >
            Contacto
          </NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled
            activeStyle={navLinkAvtiveStyle}
            to="/nosotros"
          >
            Nosotros
          </NavLinkStyled>
        </li>
      </Ulist>
    </Nav>
  );
};

export default Navbar;
