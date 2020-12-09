import React, { useState, useEffect } from "react";
import axios from "axios";
import "bulma/css/bulma.css";
import { Link } from "react-router-dom";

function MyHabits(props) {
  const [myHabitsState, setMyHabits] = useState([]);

  function getMyHabits() {
    axios
      .get(
        "http://localhost:5000/api/my-habits",
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
