import axios from "axios";

// Contains all the methods and also we need to use the create method of axios to build a new instance
class HabitService {
  constructor() {
    this.service = axios.create({
      baseURL: "https://myhabitapp.herokuapp.com",
      withCredentials: true, // indicates whether or not cross-site Access-Control requests should be made using credentials
    });
  }

  getlist = () => {
    return this.service.get("/api/explore").then((response) => response);
  };
}
export default HabitService;
