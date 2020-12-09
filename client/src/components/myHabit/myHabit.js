import React, { useState, useEffect } from "react";
import axios from "axios";
import "bulma/css/bulma.css";
import { Link } from "react-router-dom";
import moment from 'moment';


function MyHabits(props) {
  const [myHabitsState, setMyHabits] = useState([]);
  const [runStreak, setRunStreak] = useState(0);
  let longestRunStreakArray = [];
  let oneRunStreak = 0;
  const currentTime = moment().unix()

  function getMyHabits() {
    axios
      .get(
        "http://localhost:5000/api/my-habits",
        { withCredentials: true }
      )
      .then((userFromDB) => {
        setMyHabits(userFromDB.data.myHabits);    
        //logic to work out current runstreak
// function currentRunStreakCalc(){
//         for(let i = 0; i < userFromDB.data.myHabits.length; i++) {
//           if (userFromDB.data[i+1] !== undefined) { 
//             // oneRunStreak = 1;
//             const prevUpdated = Date.parse(userFromDB.data[i].myHabits.updatedAt)
//             const currentUpdated = Date.parse(userFromDB.data[i+1].myHabits.updatedAt)
      
//             if (prevUpdated !== Date.parse(userFromDB.data[i].myHabits.createdAt)) {
//               if(currentTime - prevUpdated < 86400) { //defines current run streak: within the day
//                 if(currentUpdated - prevUpdated < 86400) {
//                   //for every session completed in a 24hr window, add 1 to the runStreak. 
//                   oneRunStreak++;
//                 }  else {
//                     //else break the run streak, push it to array, and start again at 1.
//                     longestRunStreakArray.push(oneRunStreak);
//                     oneRunStreak = 0;
//                   }
//               }  
//             }
//         }}}
//         //logic to work out current runstreak
//         currentRunStreakCalc(userFromDB.data.myHabits, setRunStreak);
      })
      
      .catch((error) => console.log(error));
  }

  useEffect(getMyHabits, []);


  return (
    <div>
    <section className="section">
<div className="container">
  <div className="columns is-centered">
    <div className="column is-auto">
    <div>
    <h1 className="title is-1 is-family-code">My Habits</h1>
      </div> 
      <br></br>
      <div className="columns is-multiline">
      {myHabitsState.map((oneMyHabit) => {
        return (
                  <div class="column is-one-third">
                    <div className="card">
                      <div className="card-content" key={oneMyHabit._id}>
                        <h3 className="subtitle is-4 has-text-weight-semibold">
                          {oneMyHabit.habitname}{" "}
                        </h3>
                        <p className="content">{oneMyHabit.dailyStreak} </p>

                        <p className="content">{oneMyHabit.description} </p>
                        <p className="content">{oneMyHabit.categories} </p>
                        <br></br>
                        <footer className="card-footer">
                          <Link
                            className="card-footer-item"
                            to={`/explore/${oneMyHabit._id}`}
                          >
                            <h3 className="button is-danger is-rounded">See more</h3>
                          </Link>
                        </footer>
                      </div>
                    </div>
                  </div>
        );
      })}</div>
    </div>
  </div>
</div>
</section>





    
 
    </div>
  );
}




export default MyHabits;
