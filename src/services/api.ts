import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8090",
  auth: {
    username: "admin",
    password: "admin",
  },
  params: {
    grant_type: "password",
    username: "admin@email.com",
    password: "admin",
  },
});
