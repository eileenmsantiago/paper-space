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


// const journs = {
//   1: {
//     date:"20th Jan, 2020",
//     time:"10:15pm",
//     brief:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eleifen eleifend vestibulum......"
//   },
//   2: {
//     date:"20th Jan, 2020",
//     time:"10:15pm",
//     brief:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eleifen eleifend vestibulum......"
//   },
//   3: {
//     date:"20th Jan, 2020",
//     time:"10:15pm",
//     brief:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eleifen eleifend vestibulum......"
//   },
//   4: {
//     date:"20th Jan, 2020",
//     time:"10:15pm",
//     brief:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eleifen eleifend vestibulum......"
//   },
//   5: {
//     date:"20th Jan, 2020",
//     time:"10:15pm",
//     brief:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eleifen eleifend vestibulum......"
//   },
//   6: {
//     date:"20th Jan, 2020",
//     time:"10:15pm",
//     brief:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eleifen eleifend vestibulum......"
//   }
// }
const journals = [
  {
    id: 1,
    dateRange: "Jan 1-7",
    detail: "journal 1",
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
