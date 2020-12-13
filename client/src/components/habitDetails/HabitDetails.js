import React, { useState, useEffect } from "react";
import "bulma/css/bulma.css";
import "./HabitDetails.css";
import MyHabitButton from ".././myHabbitButton/myHabitButton";
import HabitService from "../../services/habits.service.js";

const initialState = {
  _id: " ",
  habitname: " ",
  description: " ",
  categories: " ",
};

function HabitDetails(props) {
  const [habitDetailState, setHabitDetail] = useState(initialState);

  function getOneHabit() {
    const { id } = props.match.params;
    const service = new HabitService();

    service
      .getonehabit(id)
      .then((habitFromApi) => {
        console.log(habitFromApi)
        setHabitDetail(habitFromApi.data);
        
      })
      .catch((error) => console.error(error));
  }

  useEffect(getOneHabit, [props.match.params]);

  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-half">
              <div className="card">
                <div className="card-content" key={habitDetailState._id}>
                  <h3 className="title is-1 is-family-code">
                    {habitDetailState.habitname}
                  </h3>
                  <p className="content">{habitDetailState.description}</p>
                  <p className="content">
                    <strong>Category:</strong> {habitDetailState.categories}
                  </p>
                </div>
                <div className="card-content">
                  <MyHabitButton
                    theHabit={habitDetailState}
                    getOneHabit={getOneHabit}
                    {...props}
                  />{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HabitDetails;
