import axios from "axios";

// let baseURL;
// if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
//   baseURL = "http://localhost:5000";
// } else {
//   baseURL = "https://allsystemsprogue.com.au";
// }

/**
 * withCredentials will allow for HTTP cookies to be received by the client.
 * baseURL will change in production environment.
 */
export default axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});
