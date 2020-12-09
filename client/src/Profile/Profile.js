import React, { useState, useEffect } from "react";
import {
    currentRunStreakCalc,
    longestRunStreakCalc
  } from ".././streaks/Streaks.js";
import axios from "axios";

function Profile(){
    const [runStreak, setRunStreak] = useState(0);
    const [longestRunStreak, setLongestRunStreak] = useState(0);


    useEffect(() => {
        //api call: API.meditationData
        //get all meditations:
        const getStreaks = async () => {
 
          const response = await axios({
            method: "get",
            url: "http://localhost:5000/api/my-habits"
          });

          //logic to work out longest runstreak
          longestRunStreakCalc(response, setLongestRunStreak);
    
          //logic to work out current runstreak
          currentRunStreakCalc(response, setRunStreak);
        //   setIsLoading(false);
        };
        getStreaks();
    
    })
    return(
        <div>
        </div>
    )

}
    
    export default Profile;