import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <NavLink exact to='/' >Home</NavLink>
    <NavLink exact to='/about' >About</NavLink>
  </nav>
);

export default Navigation;

