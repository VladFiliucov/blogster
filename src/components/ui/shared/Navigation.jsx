import React from 'react';
import { NavLink } from 'react-router-dom';

import 'components/styles/Navigation.css';

const Navigation = () => (
  <nav className='navigation-menu-container left'>
    <NavLink exact to='/'
      className='nav-link'
      activeStyle={{ background: '#80D8FF' }} >
      <div>
        Home
      </div>
    </NavLink>
    <NavLink exact to='/about'
      className='nav-link right'
      activeStyle={{ background: '#80D8FF' }} >
      <div>
        About
      </div>
    </NavLink>
  </nav>
);

export default Navigation;

