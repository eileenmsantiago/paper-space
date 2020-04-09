import React from 'react';
import './styles/main.scss';
import Home from './Pages/Home/Home.jsx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NewEntry from './Pages/NewEntry/NewEntry.jsx';
import Profile from './Pages/Profile/Profile.jsx';
import Nav from './ui/Nav/Nav.jsx';
import Entries from './Pages/Entries/Entries';
import {journals} from './journals';
// import firebase, { initializeApp } from “firebase”;
// import firebaseConfig from “./Config”;
// library.add(faSearch)



// import {toneAnalyzer} from './tone-test.js';

// let arr=[]

// journals.forEach((item,index)=>{
//   item.entries.forEach((item,index)=>{
//       arr.push(getVal(item.brief)) 
//   })
// })

// function getVal(str){
//     const toneParams = {
//     toneInput: { 'brief': str },
//     content_type: 'application/json',
//     };
// //Use Tone Analyzer varibale to analyze the text
//     toneAnalyzer.tone(toneParams)
//     .then(toneAnalysis => {
// //The tone of the text, as determined by watson
//     return JSON.stringify(toneAnalysis, null, 2);
//     })
//     .catch(err => { 
//     console.log('error:', err);
//     });
// }





// journals.forEach((item)=>{
//   className(item.entries.brief,mood)
// })


function App() {
  return (
    <Router>
      <div className="App">
          <Switch>
            <Route path="/" exact render={() => <Home journals={journals}/>} />
            <Route path="/newEntry" component={NewEntry} />
            <Route path="/profile" component={Profile} />
            <Route path="/entries/:journalId" render={() => <Entries journals={journals}/>} />
          </Switch>
          <Nav />
      </div>
    </Router>
  );
}

export default App;