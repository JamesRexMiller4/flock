import React from 'react';
import {NavLink} from 'react-router-dom';
import './NavBar.scss';
import home from '../../images/home-icon-silhouette.svg';
import bell from '../../images/bell.svg';
import flock from '../../images/magpie.svg';
import profile from '../../images/jarvisblargusprofile.png';
import twitter from '../../images/goldtwitter.png';

const NavBar = () => {
  return ( 
    <nav>
      <img src={twitter} alt='twitter-icon' className='icon'/>
      <NavLink to='/home' className='nav-link'><img className='home icon' 
      src={home} alt='home'/>Home</NavLink>
      <NavLink to='/notifications' className='nav-link'><img className='home icon'
      src={bell} alt='bell'/>Notifications</NavLink>
      <NavLink to='/flock' className='nav-link'><img className='home icon' 
      src={flock} alt='magpie bird'/>Flock</NavLink>
      <NavLink to='/profile' className='nav-link'><img className='home icon' 
      src={profile} alt='profile' />Profile</NavLink>
    </nav>
  );
}
export default NavBar;