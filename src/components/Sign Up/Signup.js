import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useHistory } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../Firebase/firebase";
import "./Signup.css";

function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [user, loading] = useAuthState(auth);
    const history = useHistory();
    const register = () => {
      if (!name) alert("Please enter name");
      registerWithEmailAndPassword(name, email, password);
    };
    useEffect(() => {
      if (loading) return;
      if (user) history.replace("/dashboard");
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user, loading]);
    return (
      <div className="sign-up">
        <div className="sign-up_container">
            <p className="streak-awaits">Your Streak Awaits</p>
          <input
            type="text"
            className="sign-up_textBox"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
          />
          <input
            type="text"
            className="sign-up_textBox"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail Address"
          />
          <input
            type="password"
            className="sign-up_textBox"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button className="sign-up_btn" onClick={register}>
            Sign Up
          </button>
          <button
            className="sign-up_btn sign-up_google"
            onClick={signInWithGoogle}
          >
            Register with Google
          </button>
          <div className="have-an-account">
            Already have an account? <Link to="/">Sign In</Link>
          </div>
        </div>
      </div>
    );
}

export default Signup;