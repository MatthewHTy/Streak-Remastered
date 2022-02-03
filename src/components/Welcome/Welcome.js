import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router";
import { auth, gituser } from "../Firebase/firebase";
import "./Welcome.css";

function MainContent() {

    const [user, loading] = useAuthState(auth);
    const history = useHistory();
  
    const [userdata, setuserdata] = useState({
      name: 'user',
      email: 'email',
      uid: '0',
      tracker: 0,
      planner: [],
      likedWorkouts: [],
      highscore: 0
    })
  
    const gituserdata = async () => {
      setuserdata(await gituser(user)) 
    }
  
    useEffect(() => {
      if (loading) return;
      if (!user) return history.replace("/");
      gituserdata();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user, loading]);
  
    return (
  
      <div className="welcome-user">
        <h1>Welcome, {userdata.name}</h1>
      </div>
  )
  };

  export default MainContent;