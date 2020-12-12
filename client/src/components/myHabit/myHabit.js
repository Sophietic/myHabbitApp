import React, { useState, useEffect } from "react";
import "bulma/css/bulma.css";
import { Link } from "react-router-dom";
import HabitService from "../../services/habits.service.js";
import { summary } from "date-streaks";

function MyHabits(props) {
  const [myHabitsState, setMyHabits] = useState([]);

  console.log(myHabitsState);

  function getMyHabits() {
    const service = new HabitService();

    service
      .myHabits()
      .then((userFromDB) => {
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
              <h4>
                <Link to={"/explore"} > Explore</Link> the habits that will
                change your life{" "}
              </h4>
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
                          <p className="content">{oneMyHabit.streaks} </p>

                          <p className="content">{oneMyHabit.description} </p>
                          <p className="content">
                            <strong>Category:</strong> {oneMyHabit.categories}{" "}
                          </p>
                          <br></br>
                          <footer className="card-footer">
                            <Link
                              className="card-footer-item"
                              to={`/my-habits/${oneMyHabit._id}`}
                            >
                              <h3 className="button is-danger is-rounded is-medium">
                                See more
                              </h3>
                            </Link>
                          </footer>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MyHabits;
