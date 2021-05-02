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
      <Route exact path='/categories' component={Categories} />
      <Route exact path='/offers' component={Offers} />
      <Route exact path='/contact' component={Contact} />
      <Route exact path='/contact' component={About} />
    </>
  )
}

export default Routes;
