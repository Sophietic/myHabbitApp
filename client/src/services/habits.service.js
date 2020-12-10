import axios from "axios";

class HabitService {
  constructor() {
    this.service = axios.create({
      baseURL: process.env.REACT_APP_BASE_URL,
      withCredentials: true, // indicates whether or not cross-site Access-Control requests should be made using credentials
    });
  }

  // Method to retrieve all projects
  getlist = () => {
    return this.service.get("/api/explore").then((response) => response);
  };

  
}

export default HabitService;
