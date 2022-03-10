import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router";
import { auth, gituser } from "../Firebase/firebase";
import "./Profile.css";

function Profile() {

    const [user, loading] = useAuthState(auth);
    const history = useHistory();
  
    const [userdata, setuserdata] = useState({
      name: '',
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

    return(
        <div>
            <h1>{userdata.name}'s Profile</h1>
        </div>
    )
}

export default Profile;