import React from "react";
import Welcome from '../Welcome/Welcome'
// import { Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Profile from "../Profile/Profile";
import Tracker from "../Tracker/Tracker";
import WorkoutPlans from "../Workout PlansYT/WorkoutPlans";
import WorkoutPlanner from "../Workout Planner/WorkoutPlanner";
import Navbar from "../Navbar/Navbar";
import "./Dashboard.css";

function Dashboard() {

  // const [user, loading] = useAuthState(auth);
  // const history = useHistory();

  // const [userdata, setuserdata] = useState({
  //   name: 'user',
  //   email: 'email',
  //   uid: '0',
  //   tracker: 0,
  //   planner: [],
  //   likedWorkouts: [],
  //   highscore: 0
  // })

  // const gituserdata = async () => {
  //   setuserdata(await gituser(user)) 
  // }

  // useEffect(() => {
  //   if (loading) return;
  //   if (!user) return history.replace("/");
  //   gituserdata();
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [user, loading]);

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
      <Welcome />
      </Switch>
    </Router>
      </div>
    </div>
     
    )
};

export default Dashboard;

