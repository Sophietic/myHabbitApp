import React, { useState, useEffect } from "react";
import "bulma/css/bulma.css";
import "./HabitList.css";
import { Link } from "react-router-dom";
import HabitService from "../../services/habits.service.js";
import SearchBar from ".././searchBar/SearchBar.js";

function HabitList() {
  const [listState, setList] = useState([]);

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
              <br></br>
              {/* <SearchBar listState = {listState} /> */}

              <div className="columns is-multiline">
                {listState.map((habit) => {
                  return (
                    <div class="column is-one-third">
                      <div className="card">
                        <br></br>

                        <div
                          className="card-content column is-10 is-offset-1"
                          key={habit._id}
                        >
                          <div className="columns">
                            <div className="card-image column is-one-fifth ">

                            <span className="icon has-text-warning">
                            {(() => {
              if (habit.categories === 'Nutrition'){
                  return (
                    <i className="fas fa-lemon "></i>
                  )
              }else if(habit.categories === 'Mental Health'){return ( <i className="fas fa-brain "></i>)}
              else if(habit.categories === 'Sleep'){return ( <i className="fas fa-bed "></i>)}
              else if(habit.categories === 'Energy'){return ( <i className="fas fa-battery-full "></i>)}

              else {return ( <i className="fas fa-star "></i>)}
              
              {/* return null; */}
            })()}
                              {/* <span className="icon has-text-warning"> {(()=>{
                                if(habit.categories === "Nutrition"){
                                  return <i className="fas fa-star "></i>
                                }
                  )} */}
                          
                                
                              </span>
                            </div>

                            <div className="column">
                              <h3 className="subtitle is-4 has-text-weight-semibold ">
                                {habit.habitname}{" "}
                              </h3>
                              <p className="content">{habit.dailyhabit} </p>
                              <p className="content">
                                <strong>Category:</strong> {habit.categories}{" "}
                              </p>
                            </div>
                          </div>
                          <br></br>
                          <footer className="card-footer">
                            <Link
                              className="card-footer-item"
                              to={`/explore/${habit._id}`}
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

export default HabitList;
