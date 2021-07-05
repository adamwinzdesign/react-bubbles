import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./components/Login";
import "./styles.scss";

import PrivateRoute from './components/PrivateRoute';
import BubblePage from './components/BubblePage';

function App() {
  return (
    <Router>
      <div className="App">
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
        
        {/* PrivateRoute routes to the protected page, but the PrivateRoute component checks for a token first.  If no token, Route takes the user to the Login component */}
        <PrivateRoute exact path='/protected' component={BubblePage} />
        <Route path='/login' component={Login} />
        <Route exact path='/' component={Login} />
      </div>
    </Router>
  );
}

export default App;
