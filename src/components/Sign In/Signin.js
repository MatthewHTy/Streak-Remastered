import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth, signInWithEmailAndPassword, signInWithGoogle } from "../Firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Signin.css";

function Signin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const history = useHistory();
    useEffect(() => {
      if (loading) {
        // maybe trigger a loading screen
        return;
      }
      if (user) history.replace("/dashboard");
    }, [user, loading]);
    return (
      <div className="sign-in">
        <div className="welcome-to-streak">
        {/* <div className="welcome-to-streak-container"> */}
          <h1 className="welcome-text">Welcome to Streak</h1>
        {/* </div> */}
        </div>
        <div className="sign-in_container">
          <p className="start-p">Start your Streak</p>
          <input
            type="text"
            className="sign-in_textBox"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail Address"
          />
          <input
            type="password"
            className="sign-in_textBox"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button
            className="sign-in_btn"
            onClick={() => signInWithEmailAndPassword(email, password)}
          >
            Login
          </button>
          <button className="sign-in_btn sign-in_google" onClick={signInWithGoogle}>
            Login with Google
          </button>
          <div>
            <Link to="/reset">Forgot Password</Link>
          </div>
          <div>
            <Link to="/signup">Sign Up</Link>
          </div>
        </div>
      </div>
    );
};

export default Signin;