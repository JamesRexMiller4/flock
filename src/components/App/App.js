import React from 'react';
import './App.css';
import {Redirect, Route, Switch} from 'react-router-dom';
import Landing from '../Landing/Landing';
import Flock from '../Flock/Flock';
import Home from '../Home/Home';
import NotificationsContainer from '../../containers/NotificationsContainer/NotificationsContainer';
import Profile from '../Profile/Profile';

function App() {
  return (
    <main className="App">
    <Switch>
      <Route exact path='/' component={Landing}/>
      <Route path='/home' component={Home} />
      <Route path='/notifications' component={NotificationsContainer} />
      <Route path='/flock' component={Flock} />
      <Route path='/profile' component={Profile} />
      <Redirect to='/home' />
    </Switch>
    </main>
  );
}

export default App;
