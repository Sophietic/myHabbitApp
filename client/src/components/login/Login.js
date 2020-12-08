import React, { useState } from "react";
import "./Login.css";
import AuthService from "../../services/auth.service.js";
import "bulma/css/bulma.css";
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
    <div>
      <form onSubmit={handleSubmit}>
        <h1 className="title">Log in</h1>
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
        <div className="control">
          <button className="button is-danger" type="submit" value="Login">
            Log in
          </button>
        </div>
      </form>
      {errorState && <span>{errorState}</span>}
    </div>
  );
}

export default Login;
