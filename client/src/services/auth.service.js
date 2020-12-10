import axios from "axios";

// Contains all the methods and also we need to use the create method of axios to build a new instance
class AuthService {
  constructor() {
    this.service = axios.create({
      baseURL: "http://localhost:5000/api",
      withCredentials: true, // indicates whether or not cross-site Access-Control requests should be made using credentials
    });
  }

  // Brug signup
  signup = (email, password) => {
    return this.service
      .post("/signup", { email, password })
      .then((response) => response.data);
  };
  // Brug Login
  login = (email, password) => {
    return this.service
      .post("/login", { email, password })
      .then((response) => response.data);
  };

    // Brug Loguit
    logout = () => {
      return this.service
        .post("/logout", {})
        .then((response) => response.data);
    };

    isAuthenticated = () => {
      return this.service.get("/loggedin").then((response) => response.data);
    };


}
export default AuthService;
