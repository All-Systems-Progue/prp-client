import axios from "axios";

// let baseURL;
// if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
//   baseURL = "http://localhost:8080";
// } else {
//   baseURL = "https://allsystemsprogue.com.au";
// }

/**
 * withCredentials will allow for HTTP cookies to be received by the client.
 * baseURL will change in production environment.
 */
export default axios.create({
  baseURL: process.env.BACKEND_URL || "http://localhost:8080",
  withCredentials: true,
});
