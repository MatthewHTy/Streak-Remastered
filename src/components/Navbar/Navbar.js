import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {

return (
    <nav>
        <div>
        <li>
          <Link to="/workoutplans">Workouts</Link>
        </li>
        <li>
          <Link to="/workoutplanner">Planner</Link>
        </li>
        <li>
          <Link to="/tracker">Tracker</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </div>
    </nav>
        
)

}

export default Navbar;