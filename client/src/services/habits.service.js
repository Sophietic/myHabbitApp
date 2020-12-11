import axios from "axios";

class HabitService {
  constructor() {
    this.service = axios.create({
      baseURL: process.env.REACT_APP_BASE_URL,
      withCredentials: true, // indicates whether or not cross-site Access-Control requests should be made using credentials
    });
  }

  // Method to retrieve all habits
  getlist = () => {
    return this.service.get("/explore").then((response) => response);
  };

  //Method to retrieve one habit
  getonehabit = (id) => {
    return this.service.get(`/explore/${id}`).then((response) => response);
  };

  //Method to add to myHabits
 addMyHabits = (id) => {
    return this.service
      .post(`/explore/${id}`)
      .then((response) => response);
  };

  //method to only show my habits
  myHabits = () => {
    return this.service.get("/my-habits").then((response) => response);
  };

  //method to create new habit
  // Create a project
  createProject = (data) => {
    return this.service
      .post("/create", data)
      .then((response) => response);
  };

  //Method to retrieve one  myhabit
  getonehabit = (id) => {
    return this.service.get(`/my-habits/${id}`).then((response) => response);
  };

  //Method to add streak
  addStreak = (id) => {
    return this.service
      .post(`/my-habits/${id}`)
      .then((response) => response);
  };
  
}

export default HabitService;
