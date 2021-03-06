import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Asia from './components/Asia';
import CovidData from './components/CovidData';
import Europe from './components/Europe';
import NavbarNew from './components/NavbarNew';
import VisualData from './components/VisualData';
import "./layout.css";

function App() {
  return (
    <div className="container">
      <NavbarNew />
      <Switch>
        <Route exact path='/'>
         <CovidData />
        </Route>
        <Route exact path='/covid-19-update/asia'>
         <Asia />
        </Route>
        <Route exact path='/covid-19-update/europe'>
         <Europe />
        </Route>
        <Route exact path='/covid-19-update/visualdata'>
          <VisualData />
        </Route>
        <Redirect to='/' />
     </Switch>
    </div>
  );
}

export default App;
