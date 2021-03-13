import React from "react";
import "./Homepage.css";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <section
      className="section pt-6 mt-6 mb-6 pb-6"
      // style={{
      //   backgroundImage: `url("https://images.unsplash.com/photo-1454944338482-a69bb95894af?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80")`
      // }}
    >
      <div className="container pt-5">
        <div className="columns is-centered">
          <div class="column is-half">
            <div className="card p-5 m-5 ">
              {/* <h1 className="title is-1 is-family-code card-content">
               
              </h1> */}

              <p className="subtitle mb-0 pb-0 is-3 card-content has-text-weight-bold has-text-centered ">
                More energy. Happier.<br></br> Less stressed. <br></br> It all
                starts with just one action a day.
              </p>
              <p className="card-content mt-0  is-size-5  has-text-centered">
                Choose one of the <strong>science-based</strong> habits to
                improve your life. Build up your streak by completing your daily
                habit.
              </p>

              <div className="card-content pt-0 mt-0 pb-0">
                <Link to="/explore">
                  <h3 className="button is-danger is-rounded is-large">
                    Start today
                  </h3>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Homepage;

{
  /* <section className="section">
<div className="container">
  <div className="columns is-centered">
    <div className="column is-auto">

    </div>
  </div>
</div>
</section> */
}
