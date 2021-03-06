import React, { useState } from "react";
import "./Signup.css";
import AuthService from "../../services/auth.service.js";
import { useHistory } from "react-router-dom";
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
    const { name, value } = event.target;
    setForm({ ...formState, [name]: value }); 
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
            <br></br>

              <form className="card-content column is-10 is-offset-1" onSubmit={handleSubmit}>

                <h1 className="title is-1 is-family-code">Sign Up</h1>

                <div className="field">
                  <label className="label is-medium" htmlFor="email">
                   Email
                  </label>
                  <div className="control has-icons-left">
                    <input
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      className="input"
                      placeholder="e.g. sophie@gmail.com"
                    />
                        <span class="icon is-small is-left">
                        <i class="fas fa-envelope"></i>
    </span>
  
                  </div>

                </div>

                <div className="field ">
                  <label className="label is-medium" htmlFor="password">
                    Password
                  </label>
                  <div className="control has-icons-left">
                    <input
                      name="password"
                      type="password"
                      value={formState.password}
                      onChange={handleChange}
                      className="input"
                      placeholder="6+ characters"
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
                    value="Signup"
                  >
                    Sign up
                  </button>
                </div>
              </form>
              <br></br>
              <footer className="card-footer">
                <p className="card-footer-item">
                Already have an account?{" "}
                <a className="has-text-danger" href="/login" >{" "}Log In </a>
                  {/* Already have an account?{" "} <Link className="text-has-danger" to={"/login"}>{" "} Log In</Link> */}
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
