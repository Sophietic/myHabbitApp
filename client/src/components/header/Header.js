import React, { useState, useEffect } from "react";
import "./Header.css";
import AuthService from "../../services/auth.service.js";
import "bulma/css/bulma.css";

function Header(props) {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [isActive, setisActive] = useState(false);

  const service = new AuthService();

  useEffect(() => {
    setLoggedInUser(props.userInSession);
  }, [props.userInSession]);

  function logOut() {
    service.logout()
    .then(() => {
      setLoggedInUser(null);
      props.getLoggedInUser(null);
    });
  }

  if (loggedInUser) {
    return (
      <nav
        className="navbar is-danger"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img src=".././logo192.png" alt="Healthy Habits" />
          </a>
          <a
            role="button"
            className={`navbar-burger burger${isActive ? "is-active" : ""}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            onClick={() => setisActive(!isActive)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div
          id="navbarBasicExample"
          className={`navbar-menu${isActive ? "is-active" : ""}`}
        >
          <div className="navbar-start">
            <a className="navbar-item has-text-white" href="/">
              Home
            </a>
            <a className="navbar-item has-text-white" href="/explore">
              Explore
            </a>
          </div>
          <div className="navbar-end">
            <a className="navbar-item has-text-white" href="/my-habits">
              MyHabits
            </a>
            <a className="navbar-item has-text-white" onClick={logOut} href="/">
              Log Out
            </a>
          </div>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className="navbar is-danger">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img src=".././logo192.png" alt="Healthy Habits" />
          </a>
          <a
            role="button"
            className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            onClick={() => setisActive(!isActive)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div
          id="navbarBasicExample"
          className={`navbar-menu${isActive ? "is-active" : ""}`}
        >
          <div className="navbar-start">
            <a className="navbar-item has-text-white" href="/">
              Home
            </a>
            <a className="navbar-item has-text-white" href="/explore">
              Explore
            </a>
          </div>
          <div className="navbar-end">
            <a className="navbar-item has-text-white" href="/signup">
              Sign up
            </a>
            <a className="navbar-item has-text-white" href="/login">
              Log in
            </a>
            <div className="navbar-item has-text-white"></div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
