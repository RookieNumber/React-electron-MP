import React from 'react';
import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';

import './App.global.css';
import HUD from './pages/HUD';
import Data from './pages/Data';
import Status from './pages/Status';
import Docs from './pages/Docs';
import {Navbar} from './pages/components/Navigator';
import  GoogleApiWrapper  from './pages/Maps';


export default function App() {
  return (
    <Router>
      <Navbar />
      <GoogleApiWrapper />

      <Switch>
        <Route path='/hud' exact component={HUD}/>
        <Route path='/data' component={Data}/>
        <Route path='/status' component={Status}/>
        <Route path='/docs' component={Docs}/>
      </Switch>
    </Router>
  );
}
