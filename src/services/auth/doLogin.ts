import { RouteCodes } from "@constants/routes";
import axios from "axios";

export const doLogin = async (email: string, password: string) => {
  const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    auth: {
      username: import.meta.env.VITE_USERNAME,
      password: import.meta.env.VITE_PASSWORD,
    },
    params: {
      grant_type: import.meta.env.VITE_GRANT_TYPE,
      username: email,
      password: password,
    },
  });

  return await api.post(RouteCodes.AUTH);
};
