import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Signin from "./components/Sign In/Signin";
import Signup from "./components/Sign Up/Signup";
import Dashboard from "./components/Dashboard/Dashboard"


function App() {
  return (
    <div>
      <h1>Streak</h1>
      <Router>
        <Switch>
          <Route exact path="/" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route patch="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
