import React from "react";
import "./Homepage.css";
import Footer from "../footer/Footer.js";

function Homepage(props) {
  return (
    <div className="homepage">
      <h1>Welcome, this is the homepage</h1>
      <Footer />
    </div>
  );
}

export default Homepage;
