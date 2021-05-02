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
              <Link to='/categories/computers'>
                <GiLaptop />
              </Link>
            </li>
            <li title='Cell phones'>
              <Link to='/categories/phones'>
                <GiSmartphone />
              </Link>
              </li>
            <li title='Head phones'>
              <Link to='/categories/headphones'>
                <ImHeadphones />
              </Link>
              </li>
            <li title='Video Games and Consoles'>
              <Link to='/categories/games'>
                <GiConsoleController />
              </Link>
              </li>
            <li title='Drones'>
              <Link to='/categories/drones'>
                <GiDeliveryDrone />
              </Link>
              </li>
          </Ulist>
        </SmallNav>
      </Container>

  )
}

export default SmallNavbar;
