import axios from "axios";

const baseURL = import.meta.env.DEV ? "http://localhost:8080" : import.meta.env.VITE_BACKEND_URL

/**
 * withCredentials will allow for HTTP cookies to be received by the client.
 * baseURL will change in production environment.
 */
export default axios.create({
  baseURL,
  withCredentials: true,
});
