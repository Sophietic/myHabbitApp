import React, { useState, useEffect } from "react";
import axios from "axios";
import "bulma/css/bulma.css";
import { Link } from "react-router-dom";

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
      <div>
        <h1 className="title">Explore all habits</h1>
        {listState.map((habit) => {
          return (
            <div key={habit._id}>
              <h3>{habit.habitname} </h3>
              <p>{habit.description} </p>
              <p>{habit.categories} </p>
              <Link to={`/explore/${habit._id}`}>
                <h3>See more</h3>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HabitList;
