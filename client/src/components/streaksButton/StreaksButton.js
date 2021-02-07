import React from "react";
import "bulma/css/bulma.css";
import { useHistory} from "react-router-dom";
import HabitService from "../../services/habits.service.js";

function MyStreakButton(props) {
  let history = useHistory();
  function addToMyStreaks() {
    const { id } = props.match.params; 
    const service = new HabitService();

    service
      .addStreak(id)
      .then(() => {
        history.push("/my-habits");
      })
      .catch((error) => console.error(error));
  }

  return (
      <button className="button is-danger is-rounded" onClick={addToMyStreaks}>
        Complete habit
      </button>
  );
}

export default MyStreakButton;
