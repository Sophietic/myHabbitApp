import React, { useState } from "react";
import "./Login.css";
import AuthService from "../../services/auth.service.js";
import "bulma/css/bulma.css";
import { Link } from "react-router-dom";

//https://bulma.io/documentation/form/general/
const initialState = {
  email: "",
  password: "",
};

function Login(props) {
  const [loginState, setLogin] = useState(initialState);
  const [errorState, setError] = useState("");
  const service = new AuthService();

  function handleChange(event) {
    const { name, value } = event.target;
    setLogin({ ...loginState, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const { email, password } = loginState;
    service
      .login(email, password)
      .then((response) => {
        setLogin(initialState);
        props.getLoggedInUser(response);
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
    <div className="column is-auto">
    <div className="card">
      <form className="card-content" onSubmit={handleSubmit}>
        <h1 className="title is-1 is-family-code">Log in</h1>
        <div className="field">
          <label className="label is-medium" htmlFor="email">
            Email Address
          </label>
          <div className="control">
            <input
              name="email"
              type="text"
              value={loginState.email}
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
              value={loginState.password}
              onChange={handleChange}
              class="input"
              placeholder="Please provide your password"
            />
          </div>
        </div>
        <div className="control card-content">
          <button className="button is-danger" type="submit" value="Login">
            Log in
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
 {errorState && <span>{errorState}</span>}
</section> 
  );
}

export default Login;
