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
        
        <PrivateRoute exact path='/protected' component={BubblePage} />
        <Route path='/login' component={Login} />
        <Route exact path='/' component={Login} />
      </div>
    </Router>
  );
}

export default App;
