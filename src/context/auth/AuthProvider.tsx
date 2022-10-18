import { api } from "@services/api";
import { useState } from "react";
import { AuthContext, SignInCredentials } from "./AuthContext";

type Props = {
  children?: JSX.Element;
};

const AuthProvider = ({ children }: Props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const signIn = async ({ email, password }: SignInCredentials) => {
    const data = new URLSearchParams({
      username: email,
      password: password,
    });
    try {
      const response = await api.post("/oauth/token", data, {
        params: { grant_type: import.meta.env.VITE_GRANT_TYPE },
      });
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const signOut = () => {};

  return (
    <AuthContext.Provider value={{ signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
