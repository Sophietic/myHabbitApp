import React, { useState, useEffect } from "react";
import axios from "axios";
import "bulma/css/bulma.css";
import { Link } from "react-router-dom";

function MyHabits(props) {
  const [myHabitsState, setMyHabits] = useState([]);
  //   console.log(props.loggedInUser)
  //   const user = props.loggedInUser
  //  const userId = props.loggedInUser._id || null //id van user

  function getMyHabits() {
    axios
      .get(
        "http://localhost:5000/api/my-habits",
        // { userId },
        { withCredentials: true }
      )
      .then((userFromDB) => {
        console.log(userFromDB);
        setMyHabits(userFromDB.data.myHabits);
      })
      .catch((error) => console.log(error));
  }

  useEffect(getMyHabits, []);
  return (
    <div>
      <div>
        <h1>My Habits</h1>
      </div>
      {myHabitsState.map((oneMyHabit) => {
        return (
          <div key={oneMyHabit._id}>
            <h1>{oneMyHabit.habitname}</h1>
            <p>{oneMyHabit.description}</p>
            <p>{oneMyHabit.categories}</p>
            <Link to={`/explore/${oneMyHabit._id}`}>
              <h3>See more</h3>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default MyHabits;
