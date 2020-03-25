import React from 'react';
import './styles/main.scss';
import Home from './Pages/Home/Home.jsx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Journal from './Pages/Journal/Journal.jsx';
import JournalList from './Pages/JournalList/JournalList.jsx';
import Profile from './Pages/Profile/Profile.jsx';
import TapBar from './ui/TapBar/TapBar.jsx';
// import firebase, { initializeApp } from “firebase”;
// import firebaseConfig from “./Config”;

function App() {
  return (
    <Router>
      <div className="App">
        <TapBar>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/journal" component={Journal} />
            <Route path="/journal-list" component={JournalList} />
            <Route path="/profile" component={Profile} />
          </Switch>
        </TapBar>
      </div>
    </Router>
  );
}

export default App;
