import React from "react";
import "./Homepage.css";

function Homepage() {
  return (
    <section className="section">
      <div className="container">
        <div className="columns is-centered">
          <div class="column is-auto">
            <div className="card">
              <h1 className="title is-1 is-family-code card-content">
                Healthy Habits
              </h1>
              <p className="subtitle is-3 card-content">
                More energy. Happier. Less stressed. It all starts with just a
                few minutes a day.
              </p>
              {/* <div className="card-image">
            <figure className="image is-half">
  <img src="././pexels-photo-204686.jpeg" />
</figure></div> */}
              <div className="card-content">
                <video className="videoTag" autoPlay loop muted>
                  <source
                    src="././production ID_4474973.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>

              {/* <figure class="image is-16by9">
  <iframe className="has-ratio" width="640" height="360" src="././production ID_4474973.mp4" frameborder="0" loop="1" allowfullscreen></iframe>
</figure> */}
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
