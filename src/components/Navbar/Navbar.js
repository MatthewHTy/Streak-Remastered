import { Link } from "react-router-dom";
import "./Navbar.css";
import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import { logout } from "../Firebase/firebase";

function Navbar() {

    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false);

return (

    <nav className="navbar">
        <Link to="/dashboard" className="navbar-logo">
            Streak <i class="fab fa-react" />
        </Link>
    <div className="menu-icon" onClick={handleClick}>
        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
    </div>
    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li className="nav-item">
            <Link to="/workout-plans" className="nav-links" onClick={closeMobileMenu}>
                Workouts
            </Link>
        </li>
        <li className="nav-item">
            <Link to="/workout-planner" className="nav-links" onClick={closeMobileMenu}>
                Planner
            </Link>
            {dropdown && <Dropdown />}
        </li>
        <li className="nav-item">
            <Link to="/tracker" className="nav-links" onClick={closeMobileMenu}>
                Tracker
            </Link>
        </li>
        <li className="nav-item">
            <Link to="/profile" className="nav-links" onClick={closeMobileMenu}>
                Profile
            </Link>
        </li>
        <li className="nav-item">
                <a className="nav-links" href="/" onClick={logout}>Sign Out</a>
        </li>
    </ul>
    </nav>
       
    )
}

export default Navbar;