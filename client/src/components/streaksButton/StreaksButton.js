import React from "react";
import "bulma/css/bulma.css";
import { useHistory, Link } from "react-router-dom";
import HabitService from "../../services/habits.service.js";
import { summary } from 'date-streaks';

function MyStreakButton(props) {
//   const dates = props.user.streaks
//   summary({ dates })
//   console.log(summary({ dates }))   //het werkt!!
  //console.log(props.user.streaks)
  let history = useHistory();
  function addToMyStreaks() {

    const { id } = props.match.params; //id van habit
    const { userId } = props.user._id; //id van user
    const service = new HabitService();

    service
    .addStreak(id)
      .then(() => {
        history.push("/my-habits");
      })
      .catch((error) => console.error(error));
  }


  return (
    <div>
      <button className="button is-danger is-rounded" onClick={addToMyStreaks}>
        Add to streaks
      </button>
    </div>
  )
}

export default MyStreakButton;