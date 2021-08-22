import React from 'react';
import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.global.css';
import Flight from './pages/Flight';
import Mission from './pages/Mission';
import Config from './pages/Config';
import Docs from './pages/Docs';
import Nav from './pages/components/Nav';

export default function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path='/' exact component={Flight}/>
        <Route path='/mission' component={Mission}/>
        <Route path='/config' component={Config}/>
        <Route path='/docs' component={Docs}/>
      </Switch>
    </Router>
  );
}
