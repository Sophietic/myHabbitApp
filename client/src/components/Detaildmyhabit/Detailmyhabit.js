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
  const [detailState, setDetail] = useState(initialState);
  const [streakState, setStreak] = useState(initialState);
  const [deleteState, setDelete] = useState(initialState);

  function getOneHabit() {
    const { id } = props.match.params;
    const service = new HabitService();

    service
      .getmyhabit(id)
      .then((habitFromApi) => {
        console.log(habitFromApi.data.dayCompleted);
        const dates = habitFromApi.data.dayCompleted
        console.log(summary(dates))
        setDetail(habitFromApi.data.ownHabit);
        setStreak(summary(dates))
        setDelete(habitFromApi.data)
      })
      .catch((error) => console.error(error));

  }

  function deletehabit(){
    const { id } = props.match.params;
    const service = new HabitService();

    service
      .deleteStreak(id)
      .then(() => {
        props.history.push("/my-habits");
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
                <div className="card-content" >
                  <h3 className="title is-1 is-family-code">
                    {detailState.habitname}
                  </h3>
                  <p className="content">{detailState.description}</p>
                  <p className="content">
                    <strong>Current streak:</strong>{" "}{streakState.currentStreak}
                  </p>
                  <p className="content">
                    <strong>Longest streak:</strong>{" "}{streakState.longestStreak}
                  </p>
                  <p className="content" data-enable-time={true}>
                    <strong>Today in streak:</strong>{" "}{`${streakState.todayInStreak}`}
                  </p>
                </div>
                <div className="card-content">
                  <MyStreaksButton
                    theHabit={detailState}
                    getOneHabit={getOneHabit}
                    {...props}
                  />{" "}
                </div>
                <div className="card-content">
                <button className="button is-danger is-rounded" onClick={deletehabit}>
        Delete 
      </button></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DetailMyHabit;
