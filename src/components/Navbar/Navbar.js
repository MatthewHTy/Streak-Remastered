import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {

return (
    <nav>
        <div className="react-icon">
               <Link style={{ textDecoration: 'none'}} to="/dashboard">Streak</Link>
            <i class="fab fa-react" alt="Streak-Logo">
            </i>
        </div>
        <div className="nav-list">
            <ul className="ul-list-bar"id="ul-list">
                <li>
                    <Link style={{ textDecoration: 'none'}} to="/workoutplans">Workouts</Link>
                </li>
                <li>
                    <Link style={{ textDecoration: 'none'}} to="/workoutplanner">Planner</Link>
                </li>
                <li>
                    <Link style={{ textDecoration: 'none'}} to="/tracker">Tracker</Link>
                </li>
                <li>
                    <Link style={{ textDecoration: 'none'}} to="/profile">Profile</Link>
                </li>
            </ul>    
      </div>
    </nav>
        
)

}

export default Navbar;