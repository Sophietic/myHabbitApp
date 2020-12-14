import React, { useState, useEffect } from "react";
import "bulma/css/bulma.css";
import HabitService from "../../services/habits.service.js";
import MyStreaksButton from ".././streaksButton/StreaksButton";
import { summary } from "date-streaks";
import "./Detailmyhabit"

const initialState = {
  _id: " ",
  habitname: " ",
  description: " ",
  categories: " ",
};

function DetailMyHabit(props) {
  const [detailState, setDetail] = useState(initialState);
  const [streakState, setStreak] = useState(initialState);

  function getOneHabit() {
    const { id } = props.match.params;
    const service = new HabitService();

    service
      .getmyhabit(id)
      .then((habitFromApi) => {
        const dates = habitFromApi.data.dayCompleted;
        setDetail(habitFromApi.data.ownHabit);
        setStreak(summary(dates));
      })
      .catch((error) => console.error(error));
  }

  function deletehabit() {
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
              <div className="column is-half is-offset-four-fifths"><span className="tag is-danger is-light is-small">Delete     <button
                      className="delete is-small"
                      onClick={deletehabit}
                    > </button></span></div>
                <div className="card-content">
                
                  <h3 className="title is-1 is-family-code">
                    {detailState.habitname}
                  </h3>
                  <p>Complete this habit within 24 hours to keep the current streak going!</p>
                  <p className="content">{detailState.description}</p>
                  <p className="content">
                    <strong>Current streak:</strong> {streakState.currentStreak}
                  </p>
                  <p className="content">
                    <strong>Longest streak:</strong> {streakState.longestStreak}
                  </p>
            
                  <p className="content" data-enable-time={true}>
                    <strong>Today in streak:</strong>{" "}
                    {`${streakState.todayInStreak}`}
                  </p>
                  <div >

                  <p clasName="card-footer-content">
              
                    <MyStreaksButton
                      theHabit={detailState}
                      getOneHabit={getOneHabit}
                      {...props}
                />
                  </p>
        
                  </div>
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
