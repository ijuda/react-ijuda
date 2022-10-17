import { RouteCodes } from "@constants/routes";
import { User } from "../types/User";
import { useState } from "react";
import { api } from "../services/api";
import { AuthContext } from "./AuthContext";

type Props = {
  children?: JSX.Element;
};

const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(null);

  const signIn = async (email: string, password: string) => {
    const response = await api.post(RouteCodes.AUTH, { email, password });
    console.log(response.data);
    if (response.data.user && response.data.token) {
      setUser(response.data.user);
      return true;
    }
    return false;
  };

  const signOut = () => {
    setUser(null);
    localStorage.clear();
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
