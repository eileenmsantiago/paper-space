import React from 'react';
import './styles/main.scss';
import Home from './Pages/Home/Home.jsx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NewEntry from './Pages/NewEntry/NewEntry.jsx';
import Profile from './Pages/Profile/Profile.jsx';
import Nav from './ui/Nav/Nav.jsx';
import Entries from './Pages/Entries/Entries';
// import firebase, { initializeApp } from “firebase”;
// import firebaseConfig from “./Config”;
// library.add(faSearch)

import {toneAnalyzer} from './tone-test.js';

let arr=[]

journals.forEach((item,index)=>{
  item.entries.forEach((item,index)=>{
      arr.push(getVal(item.brief)) 
  })
})

function getVal(str){
    const toneParams = {
    toneInput: { 'brief': str },
    content_type: 'application/json',
    };
//Use Tone Analyzer varibale to analyze the text
    toneAnalyzer.tone(toneParams)
    .then(toneAnalysis => {
//The tone of the text, as determined by watson
    return JSON.stringify(toneAnalysis, null, 2);
    })
    .catch(err => { 
    console.log('error:', err);
    });
}



const journals = [
  {
    id: 1,
    dateRange: "Jan 1-7",
    detail: "journal 1",
    entries: [
      {
        id:'1',
        // score:0.3,
        // tone_id:'sadness',
        date:"20th Jan, 2020",
        time:"10:15pm",
        brief:"Coding is too hard."
      },
      {
        id:'2',
        date:"20th Jan, 2020",
        time:"10:15pm",
        brief:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eleifen eleifend vestibulum......"
      }
    ]
  },
  {
    id: 2,
    dateRange: "Jan 8-15",
    detail: "journal 2",
    entries: [
      {
        date:"20th Jan, 2020",
        time:"10:15pm",
        brief:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eleifen eleifend vestibulum......"
      },
      {
        date:"20th Jan, 2020",
        time:"10:15pm",
        brief:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eleifen eleifend vestibulum......"
      },      {
        date:"20th Jan, 2020",
        time:"10:15pm",
        brief:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eleifen eleifend vestibulum......"
      },
      {
        date:"20th Jan, 2020",
        time:"10:15pm",
        brief:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eleifen eleifend vestibulum......"
      }
    ]
  },
  {
    id: 3,
    dateRange: "Jan 16-21",
    detail: "journal 3",
    entries: [
      {
        date:"20th Jan, 2020",
        time:"10:15pm",
        brief:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eleifen eleifend vestibulum......"
      }
    ]
  }
]
// var api = require('./tone.js')

// journals.forEach((items,index)=> {
//   items.entries.forEach((item,idx)=> {
//     api(itm.brief)
//   }) 
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
