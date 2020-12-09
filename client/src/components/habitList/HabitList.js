import React, { useState, useEffect } from "react";
import axios from "axios";
import "bulma/css/bulma.css";
import { Link } from "react-router-dom";
import Footer from ".././footer/Footer";

function HabitList() {
  const [listState, setList] = useState([]);

  //callbackfunction
  function getAllHabits() {
    axios
      .get("http://localhost:5000/api/explore")
      .then((habitsFromApi) => {
        setList(habitsFromApi.data);
      })
      .catch((error) => console.error(error));
  }

  useEffect(getAllHabits, []);

  return (
    <div>
    <section class="section">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-auto">
            <h1 className="title is-1 is-family-code">Explore all habits</h1>
            {listState.map((habit) => {
              return (
                <div class="columns is-multiline">
                  <div class="column is-one-quarter">
                    <div className="card">
                      <div className="card-content" key={habit._id}>
                        <h3 className="subtitle is-6 has-text-weight-semibold">
                          {habit.habitname}{" "}
                        </h3>
                        <p className="content">{habit.description} </p>
                        <p className="content">{habit.categories} </p>
                        <br></br>
                        <footer className="card-footer">
                          <Link
                            className="card-footer-item"
                            to={`/explore/${habit._id}`}
                          >
                            <h3>See more</h3>
                          </Link>
                        </footer>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
     
    </section>
    <div>
        <Footer />
      </div>
      </div>
  );
}

export default HabitList;
