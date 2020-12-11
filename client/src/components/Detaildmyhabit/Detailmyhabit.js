import React, { useState, useEffect } from "react";
import "bulma/css/bulma.css";
import HabitService from "../../services/habits.service.js";
import MyStreaksButton from ".././streaksButton/StreaksButton";
import { summary } from "date-streaks";

const initialState = {
  _id: " ",
  habitname: " ",
  description: " ",
  categories: " ",
};

function DetailMyHabit(props) {
  const [habitDetailState, setHabitDetail] = useState(initialState);

  function getOneHabit() {
    const { id } = props.match.params;
    const service = new HabitService();

    service
      .getonehabit(id)
      .then((habitFromApi) => {
        console.log(habitFromApi.data.streaks);
        // const dates = habitFromApi.data.streaks.dayCompleted
        setHabitDetail(habitFromApi.data.streaks);

        // console.log(summary({dates} ))
      })
      .catch((error) => console.error(error));
  }

  useEffect(getOneHabit, [props.match.params]);
  // console.log(summary({ habitFromApi.data.streaks }))

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
                    <strong>Healthy Habit:</strong>Try to meditate the first
                    thing in the morning just for just one minute. If morning
                    just isn’t convenient for you, I’d recommend choosing a
                    specific time you have free every day—your lunch break, for
                    instance. You might switch it up sometimes, but having
                    meditation regularly built into your daily schedule helps a
                    lot.
                  </p>
                  <p className="content">
                    <strong>Current streak:</strong>{" "}
                  </p>
                  <p className="content">
                    <strong>Longest streak:</strong>{" "}
                  </p>
                  <p className="content">
                    <strong>Within current streak:</strong>{" "}
                  </p>

                  <p className="content">
                    <strong>Category:</strong> {habitDetailState.categories}
                  </p>
                </div>
                <div className="card-content">
                  <MyStreaksButton
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

export default DetailMyHabit;
