import React from "react";
import axios from "axios";
import "bulma/css/bulma.css";
import { useHistory, Link } from "react-router-dom";

function MyHabitButton(props) {
  let history = useHistory();
  function addToMyHabits() {
    const { id } = props.match.params; //id van habit
    const { userId } = props.user._id; //id van user

    axios
      .post(
        `http://localhost:5000/api/explore/${id}`,
        { userId },
        { withCredentials: true }
      )
      .then(() => {
        history.push("/my-habits");
      })
      .catch((error) => console.error(error));
  }

  if(props.user){
  return (
    <div>
      <button className="button is-danger is-rounded" onClick={addToMyHabits}>
        Add to myHabits
      </button>
    </div>
  )}else{
    return(
    <Link to="/signup">
    <button className="button is-danger is-rounded" type="button">
         Add to myHabits
    </button>
  </Link>)
  }
}

export default MyHabitButton;
