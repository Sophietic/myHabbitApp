import React from "react";
import axios from "axios";
import "bulma/css/bulma.css";

function MyHabitButton(props) {
  function addToMyHabits() {
    const { id } = props.match.params; //id van habit
    const { userId } = props.user._id; //id van user

    axios
      .post(
        `http://localhost:5000/api/explore/${id}`,
        { userId },
        { withCredentials: true }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.error(error));
  }
  return (
    <div>
      <button onClick={addToMyHabits}>Add to myHabits</button>
    </div>
  );
}

export default MyHabitButton;
