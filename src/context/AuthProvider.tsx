import { useState } from "react";
import { doLogin } from "../services/auth/doLogin";
import { User } from "../types/User";
import { AuthContext } from "./AuthContext";

type Props = {
  children?: JSX.Element;
};

const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(null);

  const signIn = async (email: string, password: string) => {
    const response = await doLogin(email, password);
    console.log(response.data);
    return true;
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
