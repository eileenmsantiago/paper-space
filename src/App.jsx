import React from 'react';
import './styles/main.scss';
import Home from './Pages/Home/Home.jsx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NewEntry from './Pages/NewEntry/NewEntry.jsx';
import Profile from './Pages/Profile/Profile.jsx';
import Nav from './ui/Nav/Nav.jsx';
import { Container } from '@material-ui/core';
// import firebase, { initializeApp } from “firebase”;
// import firebaseConfig from “./Config”;

function App() {
  return (
    <Router>
      <div className="App">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/newEntry" component={NewEntry} />
            <Route path="/profile" component={Profile} />
          </Switch>
          <Nav />
      </div>
    </Router>
  );
}

export default App;
