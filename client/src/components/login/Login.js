import React, { useState } from "react";
import "./Login.css";
import AuthService from "../../services/auth.service.js";
import "bulma/css/bulma.css";
import { useHistory } from "react-router-dom";

const initialState = {
  email: "",
  password: "",
};

function Login(props) {
  let history = useHistory();
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
            <br></br>

              <form className="card-content column is-10 is-offset-1" onSubmit={handleSubmit}>
                <h1 className="title is-1 is-family-code">Log in</h1>
                <div className="field">
                  <label className="label is-medium" htmlFor="email">
                    Email
                  </label>
                  <div className="control has-icons-left">
                    <input
                      name="email"
                      type="email"
                      value={loginState.email}
                      onChange={handleChange}
                      className="input"
                      placeholder="e.g. sophie@gmail.com"
                    />
                                        <span class="icon is-small is-left">
                        <i class="fas fa-envelope"></i>
    </span>
                  </div>
                </div>

                <div className="field">
                  <label className="label is-medium" htmlFor="password">
                    Password
                  </label>
                  <div className="control has-icons-left">
                    <input
                      name="password"
                      type="password"
                      value={loginState.password}
                      onChange={handleChange}
                      className="input"
                      placeholder="Provide password"
                    />
                                         <span class="icon is-small is-left">
      <i class="fas fa-lock"></i>
    </span>
                  </div>
                </div>
                <p className="help is-danger">
                
                {errorState && <span>{errorState}</span>}
              </p>
              <br></br>
                <div className="control">
                  <button
                    className="button is-danger is-rounded"
                    type="submit"
                    value="Login"
                  >
                    Log in
                  </button>
                </div>
              </form>
              <br></br>
              <footer className="card-footer">
              <p className="card-footer-item">
               Don't have an account?{" "}
                <a className="has-text-danger" href="/signup" >{" "}Sign Up </a>
                  {/* Already have an account?{" "} <Link className="text-has-danger" to={"/login"}>{" "} Log In</Link> */}
                </p>
                {/* <p className="card-footer-item">
                 Don't have an account? <Link to={"/signup"}>Sign up</Link>
                </p> */}
              </footer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
