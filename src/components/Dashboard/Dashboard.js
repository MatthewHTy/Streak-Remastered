import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Profile from "../Profile/Profile";
import Tracker from "../Tracker/Tracker";
import WorkoutPlans from "../Workout PlansYT/WorkoutPlans";
import WorkoutPlanner from "../Workout Planner/WorkoutPlanner";
import Navbar from "../Navbar/Navbar";
import "./Dashboard.css";

function Dashboard() {
    return (
        
    <Router>
      <Navbar />
      <Switch>
        <Route path='/workoutplans' exact component={WorkoutPlans} />
        <Route path='/workoutplanner' component={WorkoutPlanner} />
        <Route path='/tracker' component={Tracker} />
        <Route path='/profile' component={Profile} />
      </Switch>
    </Router>
        
    )
};

export default Dashboard;