import React, { useState } from "react";
import "./Signup.css";
import AuthService from "../../services/auth.service.js";
import { Link } from "react-router-dom";
import "bulma/css/bulma.css";

const initialState = {
  email: "",
  password: "",
};

function Signup(props) {
  const [formState, setForm] = useState(initialState);
  const service = new AuthService();

  function handleChange(event) {
    //trek ingevulde waarden uit form
    const { name, value } = event.target;
    setForm({ ...formState, [name]: value }); //neem alle props mee met ...FormState en voeg alle ingevulde name values toe aan nieuwe state
  }

  function handleSubmit(event) {
    event.preventDefault();
    //pak de nieuwe waarden uit de formstate zodat je die met service naar backend kan sturen
    const { email, password } = formState;
    // met service hadden we een signup methode zodat je naar de signup route van de backend kan gaan
    service
      .signup(email, password)
      .then((response) => {
        setForm(initialState);
        props.getLoggedInUser(response);
      })
      .catch((error) => console.log(error));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1 className="title">Sign Up</h1>
        <div className="field">
          <label className="label is-medium" htmlFor="email">
            Email Address
          </label>
          <div className="control">
            <input
              name="email"
              type="text"
              value={formState.email}
              onChange={handleChange}
              className="input"
              placeholder="Please provide your email address"
            />
          </div>
        </div>

        <div className="field">
          <label className="label is-medium" htmlFor="password">
            Password
          </label>
          <div className="control">
            <input
              name="password"
              type="text"
              value={formState.password}
              onChange={handleChange}
              className="input"
              placeholder="Please provide your password"
            />
          </div>
        </div>
        <div className="control">
          <button
            className="button is-danger is-rounded"
            type="submit"
            value="Signup"
          >
            Sign up
          </button>
        </div>
      </form>
      <p>
        Already have an account? <Link to={"/login"}> Log In</Link>{" "}
      </p>
    </div>
  );
}

export default Signup;
