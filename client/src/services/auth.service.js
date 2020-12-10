import axios from "axios";

// Contains all the methods and also we need to use the create method of axios to build a new instance
class AuthService {
  constructor() {
    this.service = axios.create({
      baseURL: process.env.REACT_APP_BASE_URL,
      withCredentials: true, // indicates whether or not cross-site Access-Control requests should be made using credentials
    });
  }

  // Brug signup
  signup = (email, password) => {
    return this.service
      .post("/api/signup", { email, password })
      .then((response) => response.data);
  };
  // Brug Login
  login = (email, password) => {
    return this.service
      .post("/api/login", { email, password })
      .then((response) => response.data);
  };

    // Brug Loguit
    logout = () => {
      return this.service
        .post("/api/logout", {})
        .then((response) => response.data);
    };

    isAuthenticated = () => {
      return this.service.get("/api/loggedin").then((response) => response.data);
    };


}
export default AuthService;
