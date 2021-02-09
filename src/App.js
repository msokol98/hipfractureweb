import React from 'react';

import './App.css';
import 'bulma/css/bulma.css'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProtectedRoute from 'hoc/protectedRoute';

import Navbar from 'components/navbar';
import Landing from 'components/landing';
import NoMatchPage from 'components/nomatch';
import Login from 'components/auth/login';
import Register from 'components/auth/register';

function App() {
  return (
      <>
        <Navbar />
          <div className="has-background-light app">    

          <Router>
              <Switch>
                  <Route exact={true} path='/' component={Landing} />
                  <Route exact={true} path='/login' component={Login} />
                  <Route exact={true} path='/register' component={Register} />
                  <Route component={NoMatchPage} />
              </Switch>
          </Router>   

        </div>
      </>
  );
}

export default App;
