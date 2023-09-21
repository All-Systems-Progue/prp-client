import axios from "axios";

/**
 * withCredentials will allow for HTTP cookies to be received by the client.
 * baseURL will change in production environment.
 */
export const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  withCredentials: true,
});
