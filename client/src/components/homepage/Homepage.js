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
              Welcome, this is the homepage
            </h1>
            <p className="card-content">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Homepage;

{/* <section className="section">
<div className="container">
  <div className="columns is-centered">
    <div className="column is-auto">

    </div>
  </div>
</div>
</section> */}