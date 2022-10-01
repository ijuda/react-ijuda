import axios from "axios";

export const api = axios.create({
  baseURL: process.env.IJUDA_APP_API,
  auth: {
    username: process.env.IJUDA_APP_API_USER as any,
    password: process.env.IJUDA_APP_API_PASS as any,
  },
});
