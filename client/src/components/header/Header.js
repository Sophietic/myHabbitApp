import React, {useState, useEffect} from "react";
import './Header.css';
import AuthService from  "../../services/auth.service.js";
import 'bulma/css/bulma.css';
//https://bulma.io/documentation/components/navbar/#transparent-navbar

function Header(props){
    const [loggedInUser, setLoggedInUser] = useState(null);
  
    const service = new AuthService();
  
    useEffect(() => {
      setLoggedInUser(props.userInSession);
    }, [props.userInSession]);
  
    function logOut(){
        service.logout()
        .then(() => {
            // reset state value header
            setLoggedInUser(null);
            //reset state App
            props.getLoggedInUser(null)
    })}
 
    if (loggedInUser) {
      return (
        <nav class="navbar is-danger">
        <div class="navbar-brand">
            <a class="navbar-item" href="/">
                <img src="./logo192.png" alt="Sophies website" width="112" height="28" />
            </a>
                <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
        </div>

            <div class="navbar-menu">
                <div class="navbar-start">
                    <a class="navbar-item" href="/">
                        Home
                    </a>
                    <a class="navbar-item" href="/explore">
                        Explore
                    </a>
                    </div>
                    <div class="navbar-end">
                   
                     <div class="navbar-item"><button onClick={logOut}>Logout</button></div>

                        <div class="navbar-item">
                            <div class="field is-grouped"></div>
                        </div>
                     
                    </div>
                </div>
    </nav>
      );
    } else {
      return (
        <nav class="navbar is-danger">
        <div class="navbar-brand">
            <a class="navbar-item" href="/">
                <img src="./logo192.png" alt="Sophies website" width="112" height="28" />
            </a>
                <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
        </div>

            <div class="navbar-menu">
                <div class="navbar-start">
                    <a class="navbar-item" href="/">
                        Home
                    </a>
                    <a class="navbar-item" href="/explore">
                        Explore
                    </a>
                    </div>
                    <div class="navbar-end">
                    <a class="navbar-item" href="/signup">
                        Sign up
                    </a>
                    <a class="navbar-item" href="/login">
                        Log in
                    </a>
                        <div class="navbar-item">
                            <div class="field is-grouped"></div>
                        </div>
                    </div>
                </div>
    </nav>
      );
    }
  };
  
  export default Header;