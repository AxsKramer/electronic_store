import styled, {keyframes} from 'styled-components';
import {NavLink} from 'react-router-dom';

interface WidthContainer {
  width?: string;
  background?: string;
  height?: string;
}

interface UlistDirection {
  direction?: string;
}

interface AsideOpen {
  isOpen: boolean;
}

const open = keyframes`
  0%{
    transform: translateX(-250px);
  }
  100%{
    transform: translateX(0);
  }
`;
const close = keyframes`
  0%{
    transform: translateX(0);
  }
  100%{
    transform: translateX(-250px);
  }
`;

export const SuperContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const AsideMenu = styled.aside<AsideOpen>`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 3;
  width: 250px;
  background: #000428;
  background: -webkit-linear-gradient(to bottom, #004e92, #000428);
  background: linear-gradient(to bottom, #004e92, #000428);
  display: flex;
  justify-content: center;
  height: 100vh;
  animation: .6s ${({isOpen}) => isOpen ? open : close } ease-out forwards;
`;

export const NavLinkStyled = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-weight: bold;
`;

export const HeaderContainer = styled.header`
  background: #000428;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to bottom, #004e92, #000428);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to bottom, #004e92, #000428); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

export const Nav = styled.nav`
  color: white;
  height: 60px;
  display: none;
  @media screen and (min-width: 768px){
    display: flex;
    align-items: center;
  }
`;

export const SmallNav = styled.nav`
  color: white;
  display: flex;
  justify-content: space-evenly;
  padding: 1rem 0;
  width: 100%;
`

export const Ulist = styled.ul<UlistDirection>`
  list-style: none;
  display: flex;
  flex-direction: ${props => props.direction === 'column' ? props.direction : 'row'};
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  `;

export const ListItem = styled.li`
padding: 1rem 0;
`;

export const DivLogo = styled.div`
  width: 40%;
  margin: 0 auto;
  text-align: center;
  @media screen and (max-width: 766px){
    width: 100%;
    text-align: center;
  }
`;

export const ImageHero = styled.img`
  width: 100%;
  height: 100%;
  @media screen and (max-width: 766px){
    height: 300px;
  }
`;

export const Container = styled.div<WidthContainer>`
  min-height: 30px;
  max-height: fit-content;
  height: ${({height}) => height && height};
  display: flex;
  justify-content: center;
  padding: .5rem;
  width: ${(props) => props.width ? props.width : '100%' };
  margin: 0 auto;
  background: ${({background}) => background ? background : 'transparent'};

  @media screen and (max-width: 766px){
    width: 100%;
    flex-wrap: wrap;
    padding: 0;
    height: ${({height}) => height && '350px'};
  }
`

export const Form = styled.form`
  margin: 0px auto 0px auto;
  width: 50%;
  border-radius: 20px;
  display: flex;
  align-self: center;
  @media screen and (max-width: 766px){
    width: 80%;
    align-self: start;
  }
`;

export const InputText = styled.input`
  padding: .5rem;
  width: 80%;
  height: 40px;
  border-radius: 20px 0 0 20px;
  border-left: 2px solid #1f1c18 ;
  border-top: 2px solid #1f1c18 ;
  border-bottom: 2px solid #1f1c18 ;
  border-right: 2px solid #1f1c18 ;
  outline: none;
`;

export const SearchButton = styled.input`
  width: 5rem;
  height: 40px;
  border-radius: 0 20px 20px 0;
  outline: none;
  background: #ff7415;
  color: white;
  font-weight: bold;
  border-left: 2px solid #1f1c18 ;
  border-right: 2px solid #1f1c18 ;
  border-top: 2px solid #1f1c18 ;
  border-bottom: 2px solid #1f1c18 ;
  transition: .5s ease;
  text-shadow: 2px 2px 3px black;

  &:active{
    transform: scale(.9)
  }
`;

export const HambugerButton = styled.button`
  border-radius: 50%;
  outline: none;
  width: 2.5rem;
  height: 2.5rem;
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 4;
  color: black;
  background: black;
  display: none;

  @media screen and (max-width: 766px){
    display: block;
  }
`;

export const Subtitle = styled.h2`
  text-align: center;
  font-weight: bold;
  font-size: 2rem;
  margin: 2rem 0 1rem 0; 
  @media screen and (max-width: 450px){
    font-size: 1.5rem;
  }
`;

export const ContainerScrollX = styled.div`
  display: flex;
  justify-content: space-between;
  overflow-x: auto;
  width: 100%;
`;

export const FooterStyled = styled.footer`
  width: 100%;
  background: #004e92;
  text-align: center;
  color: white;
  padding-bottom: .8rem;
  margin-top: 2rem;
`;