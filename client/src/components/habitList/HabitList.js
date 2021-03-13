//https://www.youtube.com/watch?v=Q8JyF3wpsHc searchbar
import React, { useState, useEffect } from "react";
import "bulma/css/bulma.css";
import "./HabitList.css";
import { Link } from "react-router-dom";
import HabitService from "../../services/habits.service.js";

function HabitList() {
  const [listState, setList] = useState([]);
  const [search, SetSearch] = useState("");

  function getAllHabits() {
    const service = new HabitService();

    service
      .getlist()
      .then((habitsFromApi) => {
        setList(habitsFromApi.data);
      })
      .catch((error) => console.error(error));
  }

  useEffect(getAllHabits, []);

  const filteredHabits = listState.filter((habit) => {
    console.log(habit);
    return (
      habit.habitname.toLowerCase().includes(search.toLowerCase()) ||
      habit.dailyhabit.toLowerCase().includes(search.toLowerCase()) ||
      habit.categories.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-auto">
              <h1 className="title is-1 is-family-code">Explore all habits</h1>
              <br></br>
              <p className="subtitle is-5">
                Discover the habits you can build up for a happier and healthier
                life
              </p>
              <div className="control has-icons-left">
                <input
                  className="input is-light "
                  type="text"
                  placeholder="Search habits"
                  onChange={(e) => SetSearch(e.target.value)}
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-search"></i>
                </span>
              </div>
              <br></br>
              <div className="columns is-multiline">
                {filteredHabits.map((habit) => {
                  return (
                    <div class="column is-one-third">
                      <Link to={`/explore/${habit._id}`}>
                        <div className="card p-1">
                          <br></br>

                          <div
                            className="card-content column is-12 p-1 m-"
                            key={habit._id}
                          >
                            <div className="columns m-2">
                              <div className="card-image column is-one-fifth pl-3  ">
                                <span className="icon has-text-warning ">
                                  {(() => {
                                    if (habit.categories === "Nutrition") {
                                      return (
                                        <i className="fas fa-lemon fa-2x"></i>
                                      );
                                    } else if (
                                      habit.categories === "Mental Health"
                                    ) {
                                      return (
                                        <i className="fas fa-brain fa-2x"></i>
                                      );
                                    } else if (habit.categories === "Sleep") {
                                      return (
                                        <i className="fas fa-bed fa-2x"></i>
                                      );
                                    } else if (habit.categories === "Energy") {
                                      return (
                                        <i className="fas fa-battery-full fa-2x"></i>
                                      );
                                    } else {
                                      return (
                                        <i className="fas fa-star fa-2x"></i>
                                      );
                                    }
                                  })()}
                                </span>
                              </div>
                              <div className="cardtext m-0 p-0">
                                <div className="column">
                                  <h3 className="blok subtitle is-4 has-text-weight-semibold habitname mb-0 ">
                                    {habit.habitname}
                                  </h3>
                                  <p className="blok content dailyhabit  mt-0 mb-0">
                                    {habit.dailyhabit}{" "}
                                  </p>
                                  <p className="blok content is-size-7 pt-0 mt-0">
                                    <strong>Category:</strong>{" "}
                                    {habit.categories}{" "}
                                  </p>
                                </div>
                              </div>
                            </div>
                            {/* <footer className="card-footer">
                            <Link
                              className="card-footer-item"
                              to={`/explore/${habit._id}`}
                            >
                              <h3 className="button is-danger is-rounded is-medium">
                                See more
                              </h3> 
                            </Link>
                          </footer> */}
                          </div>
                        </div>
                      </Link>
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

export default HabitList;
