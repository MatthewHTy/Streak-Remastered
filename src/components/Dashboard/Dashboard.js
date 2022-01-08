import React from "react";
// import { Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Profile from "../Profile/Profile";
import Tracker from "../Tracker/Tracker";
import WorkoutPlans from "../Workout PlansYT/WorkoutPlans";
import WorkoutPlanner from "../Workout Planner/WorkoutPlanner";
import Navbar from "../Navbar/Navbar";
import "./Dashboard.css";
import { logout } from "../Firebase/firebase";

function Dashboard() {
    return (
    <div>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/workoutplans' component={WorkoutPlans} />
        <Route exact path='/workoutplanner' component={WorkoutPlanner} />
        <Route exact path='/tracker' component={Tracker} />
        <Route exact path='/profile' component={Profile} />
        {/* <Route path='/' component={SignOut} /> */}
      </Switch>
    </Router>
    <div className="sign-out">
      <a className="sign-out-btn"href="/" onClick={logout}>Sign Out</a>
    </div>
    </div>
     
    )
};

export default Dashboard;
