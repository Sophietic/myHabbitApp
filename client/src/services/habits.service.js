import axios from "axios";
class HabitService {
  constructor() {
    this.service = axios.create({
      baseURL: process.env.REACT_APP_BASE_URL,
      withCredentials: true, 
    });
  }

  getlist = () => {
    return this.service.get("/explore").then((response) => response);
  };

  getonehabit = (id) => {
    return this.service.get(`/explore/${id}`).then((response) => response);
  };

  addMyHabits = (id) => {
    return this.service.post(`/explore/${id}`).then((response) => response);
  };

  myHabits = () => {
    return this.service.get("/my-habits").then((response) => response);
  };

  createProject = (data) => {
    return this.service.post("/create", data).then((response) => response);
  };

  getmyhabit = (id) => {
    return this.service.get(`/my-habits/${id}`).then((response) => response);
  };

  addStreak = (id) => {
    return this.service.post(`/my-habits/${id}`).then((response) => response);
  };
  deleteStreak = (id) => {
    return this.service.post(`/my-habits/${id}/delete`).then((response) => response);
  };
  
}

export default HabitService;
