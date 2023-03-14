import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import LogIn from './views/log-in'
import Home from './views/home'
import StudentDetails from './views/student-details'
import StudentLogin from './views/student-login'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={LogIn} exact path="/log-in" />
        <Route component={Home} exact path="/" />
        <Route component={StudentDetails} exact path="/student-details" />
        <Route component={StudentLogin} exact path="/student-login" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
