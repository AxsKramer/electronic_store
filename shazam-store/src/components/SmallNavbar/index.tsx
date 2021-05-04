import React from 'react';
import {Link} from 'react-router-dom';
import { SmallNav, Container, Ulist } from '../../styles/index';
import { GiConsoleController, GiSmartphone, GiLaptop, GiDeliveryDrone } from 'react-icons/gi';
import {ImHeadphones} from 'react-icons/im'
const SmallNavbar = () => {
  return (
      <Container>
        <SmallNav>
          <Ulist>
            <li title='Computers'>
              <Link to='/categorias/computadoras'>
                <GiLaptop />
              </Link>
            </li>
            <li title='Cell phones'>
              <Link to='/categorias/celulares'>
                <GiSmartphone />
              </Link>
              </li>
            <li title='Head phones'>
              <Link to='/categorias/audifonos'>
                <ImHeadphones />
              </Link>
              </li>
            <li title='Video Games and Consoles'>
              <Link to='/categorias/videojuegos'>
                <GiConsoleController />
              </Link>
              </li>
            <li title='Drones'>
              <Link to='/categorias/drones'>
                <GiDeliveryDrone />
              </Link>
              </li>
          </Ulist>
        </SmallNav>
      </Container>

  )
}

export default SmallNavbar;
