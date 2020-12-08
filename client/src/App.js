import React, {useState} from "react";
import {Switch, Route} from "react-router-dom";
import './App.css';
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import Homepage from "./components/homepage/Homepage";
import Header from "./components/header/Header";
import AddHabit from "./components/addHabit/addHabit";
import HabitList from "./components/habitList/HabitList";
import HabitDetails from "./components/habitDetails/HabitDetails";
import AuthService from  "./services/auth.service.js";
// import MyHabitButton from "./components/myHabbitButton/myHabitButton";


function App() {
  //is gebruiker ingelogd of niet?
const [loggedInUser, setLoggedInUser] = useState(null);

const service = new AuthService();

function isAuthenticated(){
  if (loggedInUser === null) {
    service
      .isAuthenticated()
      .then((response) => {
        setLoggedInUser(response);
      })
      .catch((err) => {
        setLoggedInUser(false);
      });
  }
}
isAuthenticated();

//verander state naar ingelogde user
function getLoggedInUser(userObject){
  setLoggedInUser(userObject)
}
//show wanneer wel ingelogd, bij else wanneer niet ingelogd
if(loggedInUser){
  return(
    <div> 
        <Header userInSession={loggedInUser} getLoggedInUser={getLoggedInUser} />
    
        <Switch>
      <Route exact path="/" component={() => <Homepage loggedInUser={loggedInUser}/>} />
      <Route path="/signup" component={() => <Signup getLoggedInUser={getLoggedInUser}/>} />
      <Route path="/login" component={() => <Login getLoggedInUser={getLoggedInUser}/>} />
      <Route path="/create" component={AddHabit} />
      <Route exact path="/explore" component={HabitList} />
      <Route exact path="/explore/:id" component={(props) => <HabitDetails {...props} user={loggedInUser}/>} />
      {/* <Route exact path="/explore/:id" render={props => <HabitDetails {...props} userInSession={loggedInUser}/>} />  */}
      {/* <Route path="/explore/:id/addToMyHabits" component={(props) => <MyHabitButton {...props} loggedInUser={loggedInUser}/>} />  */}
    </Switch>
    </div>
  )
}else{
  return (
    <div className="App">
  <Header userInSession={loggedInUser} getLoggedInUser={getLoggedInUser} />

    <Switch>
      <Route exact path="/" component={() => <Homepage loggedInUser={loggedInUser}/>} />
      <Route path="/signup" component={() => <Signup getLoggedInUser={getLoggedInUser}/>} />
      <Route path="/login" component={() => <Login getLoggedInUser={getLoggedInUser}/>} />
      <Route path="/create" component={AddHabit} />
      <Route exact path="/explore" component={HabitList} />
      <Route exact path="/explore/:id" component={(props) => <HabitDetails {...props} loggedInUser={loggedInUser}/>} />
      {/* <Route exact path="/explore/:id" render={props => <HabitDetails {...props} userInSession={loggedInUser}/>} />  */}
      {/* <Route path="/explore/:id/addToMyHabits" component={(props) => <MyHabitButton {...props} loggedInUser={loggedInUser}/>} />  */}
    </Switch>
    </div>
  )
}
  
}

export default App;
