import React from 'react';
import logo from './logo.svg';
import './App.css';
import Landing from '../Landing/Landing';
import {Redirect, Route, Switch} from 'react-router-dom';

function App() {
  return (
    
    <main className="App">
    <Switch>
      <Route exact path='/' component={Landing}/>
      <Route path='/home' component={Home} />
      <Route path='/notifications' component={Notifications} />
      <Route path='/flock' component={Flock} />
      <Route path='/profile' component={Profile} />
      {/* // <nav>
      //   <NavLink to='/home' className='nav'>Home</NavLink>/>
      //   <NavLink to='/notifications' className='nav'>Notifications</NavLink>/>
      //   <NavLink to='/flock' className='nav'>Flock</NavLink>/>
      //   <NavLink to='/profile' className='nav'>Profile</NavLink>/>
      // </nav> */}
      <Redirect to='/home' />
    </Switch>
    </main>
  );
}

export default App;
