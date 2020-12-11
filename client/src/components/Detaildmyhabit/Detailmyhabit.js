import React, { useState, useEffect } from "react";
import "bulma/css/bulma.css";
import HabitService from "../../services/habits.service.js";
import MyStreaksButton from ".././streaksButton/StreaksButton";

const initialState = {
  _id: " ",
  habitname: " ",
  description: " ",
  categories: " ",
};

function DetailMyHabit(props) {
  const [habitDetailState, setHabitDetail] = useState(initialState);
  const loggedInUser = props.loggedInUser
  
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
      <div className="column is-auto">
      <div className="card">
        <div className="card-content" key={habitDetailState._id}> 
          <h3 className="subtitle is-4 has-text-weight-semibold">{habitDetailState.habitname}</h3>
          <h3 className="content">{habitDetailState.description}</h3>
          <h3 className="content">{habitDetailState.categories}</h3>  
      </div>
      <div className="card-content">
      <MyStreaksButton
            theHabit={habitDetailState}
            getOneHabit={getOneHabit}
            {...props}
            
          />  </div> 
      </div>
      </div>
    </div>
  </div>
  </section>
      </div>
    );
  }
  


export default DetailMyHabit;
