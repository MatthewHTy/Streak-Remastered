import React from "react";
import Welcome from "../Welcome/Welcome"
import Home from "../Home/Home";
// import { Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Profile from "../Profile/Profile";
import Tracker from "../Tracker/Tracker";
import WorkoutPlans from "../Workout PlansYT/WorkoutPlans";
import WorkoutPlanner from "../Workout Planner/WorkoutPlanner";
import Navbar from "../Navbar/Navbar";
import "./Dashboard.css";

function Dashboard() {

    return (
    <div>
      <div>

    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/workout-plans' component={WorkoutPlans} />
        <Route exact path='/workout-planner' component={WorkoutPlanner} />
        <Route exact path='/tracker' component={Tracker} />
        <Route exact path='/profile' component={Profile} />
        {/* <Route path='/' component={SignOut} /> */}
        <div>
          <Welcome />
          <Home />
        </div>
      </Switch>
    </Router>
      </div>
    </div>
     
    )
};

export default Dashboard;

