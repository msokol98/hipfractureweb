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
import QuizCreationForm from 'components/create/quizCreationFormContainer';
import Quiz from 'components/quiz/quizContainer';
import Quizzes from 'components/quizzes/quizzesContainer';
import Portal from 'components/portal/PortalContainer';

import Temp from 'components/temp';

function App() {
  return (
      <>
        <Navbar />
          <div className="has-background-light app">    

          <Router>
              <Switch>
                  <Route exact={true} path='/' component={Landing} />
                  <ProtectedRoute exact={true} path='/create' component={QuizCreationForm} />
                  <Route exact={true} path='/login' component={Login} />
                  <Route exact={true} path='/register' component={Register} />
                  <Route exact={true} path='/portal' component={Portal} />
                  <Route path='/quizzes' exact={true} component={Quizzes}/>
                  <Route path='/quizzes/:quizId' exact={true} component={Quiz}/>

                  {/* <Route exact={true} path='/temp' component={Temp} /> */}

                  <Route component={NoMatchPage} />


              </Switch>
          </Router>   

        </div>
      </>
  );
}

export default App;
