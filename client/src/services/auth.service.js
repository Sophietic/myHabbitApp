import axios from "axios";
class AuthService {
  constructor() {
    this.service = axios.create({
      baseURL: process.env.REACT_APP_BASE_URL || "http://localhost:5000/api",
      withCredentials: true,
    });
  }

  signup = (email, password) => {
    return this.service
      .post("/signup", { email, password })
      .then((response) => response.data);
  };
  login = (email, password) => {
    return this.service
      .post("/login", { email, password })
      .then((response) => response.data);
  };

  logout = () => {
    return this.service.post("/logout", {}).then((response) => response.data);
  };

  isAuthenticated = () => {
    return this.service.get("/loggedin").then((response) => response.data);
  };
}
export default AuthService;
