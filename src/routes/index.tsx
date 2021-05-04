import React from 'react';
import { Route } from 'react-router-dom';
import About from '../pages/About';
import Categories from '../pages/Categories';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Offers from '../pages/Offers';


const Routes = () => {
  return (
    <>
      <Route exact path='/' component={Home} />
      <Route exact path='/categorias' component={Categories} />
      <Route exact path='/ofertas' component={Offers} />
      <Route exact path='/contacto' component={Contact} />
      <Route exact path='/nosotros' component={About} />
    </>
  )
}

export default Routes;
