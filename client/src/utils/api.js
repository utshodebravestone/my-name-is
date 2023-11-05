import axios from "axios";

const ROOT_URL = "http://localhost:8080";

export const signup = ({ username, email, password }) => {
  try {
    axios.post(`${ROOT_URL}/api/auth/signup`, {
      username,
      email,
      password,
    });
  } catch (e) {
    alert("Couldn't Sign Up");
    console.error(e);
  }
};
