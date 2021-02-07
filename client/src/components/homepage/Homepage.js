import React from "react";
import "./Homepage.css";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <section className="section">
      <div className="container">
        <div className="columns is-centered">
          <div class="column is-auto">
            <div className="card ">
              <h1 className="title is-1 is-family-code card-content">
                Healthy Habits
              </h1>
              <p className="subtitle is-3 card-content">
                More energy. Happier. Less stressed. It all starts with just a
                few minutes a day.
              </p>
              {/* <p className="card-content">Choose one of the many habits to improve your life. 
              Build up your streak by completing your daily habit</p> */}

              <div className="card-content ">
                <Link to="/signup">
                  <h3 className="button is-danger is-rounded is-large">
                    Start today
                  </h3>
                </Link>
              </div>
              <div className="card-content">
                <video className="videoTag" autoPlay loop muted>
                  <source
                    src="././production ID_4474973.mp4"
                    type="video/mp4"
                  />
                </video>
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
