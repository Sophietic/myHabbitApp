import axios from "axios";

// Contains all the methods and also we need to use the create method of axios to build a new instance
class HabitService {
  constructor() {
    this.service = axios.create({
      baseURL: "https://myhabitapp.herokuapp.com/api",
      withCredentials: true, // indicates whether or not cross-site Access-Control requests should be made using credentials
    });
  }

 getlist = () => {
    return this.service
      .get("/explore")
      .then((response) => response.data);
  };
 


}
export default HabitService;
