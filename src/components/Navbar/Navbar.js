import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { auth, db, logout } from "../Firebase/firebase";
import "./Navbar.css";

function Navbar() {
    const [user, loading] = useAuthState(auth);
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
    return (
       <div>Hello</div>
    )
}

export default Navbar;