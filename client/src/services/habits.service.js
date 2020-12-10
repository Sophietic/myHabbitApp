import axios from "axios";

class HabitService {
  constructor() {
    this.service = axios.create({
      baseURL: "http://localhost:5000/api",
      withCredentials: true, // indicates whether or not cross-site Access-Control requests should be made using credentials
    });
  }

  // Method to retrieve all projects
  getlist = () => {
    return this.service.get("/explore").then((response) => response);
  };

  
}

export default HabitService;
