import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { LastLocationProvider } from 'react-router-last-location';
import Dashboard from '../../Pages/Dashboard/Dashboard.jsx';
import NewEntry from '../../Pages/NewEntry/NewEntry.jsx';
import Profile from '../../Pages/Profile/Profile.jsx';
import Landing from '../../Pages/Landing/Landing.jsx';
import Onboarding from '../../Pages/Onboarding/Onboarding.jsx';
import Splash from '../../Pages/Splash/Splash.jsx';
import Login from '../../Pages/Login/Login.jsx';
import Register from '../../Pages/Register/Register.jsx';
import Nav from '../Nav/Nav.jsx';
import Entries from '../../Pages/Entries/Entries';
import Entry from '../../Pages/Entry/Entry.jsx';
import {journals} from '../../api/journals';

function App() {

  return (
    <Router>
      <LastLocationProvider>
        <div className="app">
          <div className="app__content">
            <main>
              <Switch>
                <Route path="/splash" component={Splash} />
                <Route path="/onboarding" component={Onboarding} />
                <Route path="/" exact render={() => <Dashboard entries={journals}/>} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/landing" component={Landing} />
                <Route path="/dashboard" render={() => <Dashboard entries={journals}/>} />
                <Route path="/entry/:entryId" component={Entry} />
                <Route path="/entry" component={NewEntry} />
                <Route path="/profile" component={Profile} />
                <Route path="/entries/:journalId" render={() => <Entries journals={journals}/>} />
              </Switch>
            </main>
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
