import React from 'react';
import './Home.scss';
import NavBar from '../NavBar/NavBar';
import TimeLine from '../../containers/TimeLine/Timeline';

const Home = () => {
  return ( 
    <section className='main-home-section'>
      <NavBar />
      <TimeLine />
    </section>
  );
}

export default Home;