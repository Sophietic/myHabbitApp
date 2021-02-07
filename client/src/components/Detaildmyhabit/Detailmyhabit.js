import React, { useState, useEffect } from "react";
import "bulma/css/bulma.css";
import HabitService from "../../services/habits.service.js";
import MyStreaksButton from ".././streaksButton/StreaksButton";
import { summary } from "date-streaks";
import "./Detailmyhabit";


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
                <div className="column is-half is-offset-four-fifths">
                  <span className="tag is-danger is-light is-small">
                    Delete{" "}
                    <button className="delete is-small" onClick={deletehabit}>
                      {" "}
                    </button>
                  </span>
                </div>
                <div className="card-content column is-10 is-offset-1">
                  <h3 className="title is-1 is-family-code">
                    {detailState.habitname}
                  </h3>
                  <article className="message is-warning is-normal">
                    {" "}
                    <div className="message-body">
                      Complete this habit within 24 hours to keep the current
                      streak going!
                    </div>
                  </article>
                  <p className="content">{detailState.description}<a className="has-text-danger" href={`${detailState.science}`} target="_blank" rel="noreferrer">Read the science. </a>
</p>
                  <p className="content">     <strong>Daily Habit:{" "}</strong> {detailState.dailyhabit}</p>

{/* <p className="content">
  <strong>Category:</strong> {detailState.categories}
</p> */}
{/* <Link
            className="content"
            to={`${detailState.science}`}
          >
            <h3 className="button is-danger is-rounded is-medium">
              Read the science
            </h3>
    
          </Link> */}
                  <p className="content">
                    <strong>Current streak:</strong> {streakState.currentStreak}{" "}
                    day(s)
                  </p>
                  <p className="content">
                    <strong>Longest streak:</strong> {streakState.longestStreak}{" "}
                    day(s)
                  </p>

                  <p className="content" data-enable-time={true}>
                    <strong>Today in streak:</strong>{" "}
                    {`${streakState.todayInStreak}`}
                  </p>
                  <div>
                    <br></br>

                    <p clasName="card-footer-content">
                      <MyStreaksButton
                        theHabit={detailState}
                        getOneHabit={getOneHabit}
                        {...props}
                      />
                    </p>
                    <br></br>
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
