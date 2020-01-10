import React from 'react';
import {NavLink} from 'react-router-dom';

const NavBar = () => {
  return ( 
    <nav>
      <NavLink to='/home' className='nav'>Home</NavLink>/>
      <NavLink to='/notifications' className='nav'>Notifications</NavLink>/>
      <NavLink to='/flock' className='nav'>Flock</NavLink>/>
      <NavLink to='/profile' className='nav'>Profile</NavLink>/>
    </nav>
  );
}
export default NavBar;