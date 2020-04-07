import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { LastLocationProvider } from 'react-router-last-location';
import Dashboard from '../../Pages/Dashboard/Dashboard.jsx';
import NewEntry from '../../Pages/NewEntry/NewEntry.jsx';
import Profile from '../../Pages/Profile/Profile.jsx';
import Landing from '../../Pages/Landing/Landing.jsx';
import Login from '../../Pages/Login/Login.jsx';
import Register from '../../Pages/Register/Register.jsx';
import Nav from '../Nav/Nav.jsx';
import Entries from '../../Pages/Entries/Entries';

// const {
//   user,
//   signOut,
//   signInWithGoogle,
// } = this.props;

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
    detail: "entry 1",
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
    detail: "entry 2",
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
    detail: "entry 3",
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
      <LastLocationProvider>
        <div className="app">
          <div className="app__content">
            <main>
              <Switch>
                <Route path="/" exact render={() => <Dashboard entries={journals}/>} />
                <Route path="/dashboard" render={() => <Dashboard entries={journals}/>} />
                <Route path="/newEntry" component={NewEntry} />
                <Route path="/profile" component={Profile} />
                <Route path="/paperspace" component={Landing} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/entries/:journalId" render={() => <Entries journals={journals}/>} />
              </Switch>
            </main>
            <Nav />
          </div>
        </div>
      </LastLocationProvider>
    </Router>
  );
}
// export default withFirebaseAuth({
//   providers,
//   firebaseAppAuth,
// })(App);
export default App;
