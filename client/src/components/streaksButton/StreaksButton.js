import React from "react";
import "bulma/css/bulma.css";
import { useHistory, Link } from "react-router-dom";
import HabitService from "../../services/habits.service.js";
import { summary } from "date-streaks";

function MyStreakButton(props) {
  let history = useHistory();
  function addToMyStreaks() {
    const { id } = props.match.params; 
    const { userId } = props.user._id; 
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
        Click to complete this habit for today
      </button>
    </div>
  );
}

export default MyStreakButton;
