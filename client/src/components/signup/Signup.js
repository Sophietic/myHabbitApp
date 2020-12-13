import React, { useState } from "react";
import "./Signup.css";
import AuthService from "../../services/auth.service.js";
import { Link, useHistory } from "react-router-dom";
import "bulma/css/bulma.css";

const initialState = {
  email: "",
  password: "",
};

function Signup(props) {
  let history = useHistory();
  const [formState, setForm] = useState(initialState);
  const [errorState, setError] = useState("");
  const service = new AuthService();

  function handleChange(event) {
    //trek ingevulde waarden uit form
    const { name, value } = event.target;
    setForm({ ...formState, [name]: value }); //neem alle props mee met ...FormState en voeg alle ingevulde name values toe aan nieuwe state
  }

  function handleSubmit(event) {
    event.preventDefault();
    const { email, password } = formState;
    service
      .signup(email, password)
      .then((response) => {
        setForm(initialState);
        props.getLoggedInUser(response);
        history.push("/my-habits");
      })
      .catch((error) => {
        console.log(error);
        const { message } = error.response.data;
        setError(message);
      });
  }

  return (
    <section className="section">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-half">
            <div className="card">
              <form className="card-content" onSubmit={handleSubmit}>
                <h1 className="title is-1 is-family-code">Sign Up</h1>
                <div className="field">
                  <label className="label is-medium" htmlFor="email">
                   Email
                  </label>
                  <div className="control">
                    <input
                      name="email"
                      type="email"
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
                      type="password"
                      value={formState.password}
                      onChange={handleChange}
                      className="input"
                      placeholder="Please provide your password"
                    />
                  </div>
                </div>
                <div className="has-text-danger">
                  {errorState && <span>{errorState}</span>}
                </div>
                <div className="control card-content">
                  <button
                    className="button is-danger is-rounded"
                    type="submit"
                    value="Signup"
                  >
                    Sign up
                  </button>
                </div>
              </form>
              <br></br>
              <footer className="card-footer">
                <p className="card-footer-item">
                  Already have an account? <Link to={"/login"}> Log In</Link>{" "}
                </p>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signup;
