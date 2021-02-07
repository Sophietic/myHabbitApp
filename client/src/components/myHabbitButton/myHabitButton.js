import React from "react";
import "bulma/css/bulma.css";
import { useHistory, Link } from "react-router-dom";
import HabitService from "../../services/habits.service.js";

function MyHabitButton(props) {
  let history = useHistory();
  function addToMyHabits() {
    const { id } = props.match.params; 
    const service = new HabitService();

    service
      .addMyHabits(id)
      .then(() => {
        history.push("/my-habits");
      })
      .catch((error) => console.error(error));
  }

  if (props.user) {
    return (
      <div>
        <button className="button is-danger is-rounded is-m" onClick={addToMyHabits}>
          Add to myHabits
        </button>
      </div>
    );
  } else {
    return (
      <Link to="/signup">
        <button className="button is-danger is-rounded is-medium" type="button">
          Add to myHabits
        </button>
      </Link>
    );
  }
}

export default MyHabitButton;
