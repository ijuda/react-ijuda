import { api } from "@api/api";
import jwtDecode from "jwt-decode";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContextType, SignInCredentials, UserType } from "../../types";

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

type Props = {
  children?: JSX.Element;
};

const AuthProvider = ({ children }: Props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storageToken = localStorage.getItem("accessToken");
    if (storageToken) {
      const decodedToken = jwtDecode(storageToken);
      localStorage.setItem("user", JSON.stringify(decodedToken));
      setIsAuthenticated(true);
    }
  });

  const signIn = async ({ email, password }: SignInCredentials) => {
    const data = new URLSearchParams({
      username: email,
      password: password,
    });
    try {
      const response = await api.post("/oauth/token", data, {
        params: { grant_type: import.meta.env.VITE_GRANT_TYPE },
      });
      localStorage.setItem(
        "accessToken",
        JSON.stringify(response.data.access_token)
      );
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const signOut = () => {
    localStorage.clear();
    setIsAuthenticated(false);
  };

  const currentUser = JSON.parse(localStorage.getItem("user")!);

  return (
    <AuthContext.Provider
      value={{ signIn, signOut, isAuthenticated, currentUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  const { signIn, isAuthenticated, signOut, currentUser } = context;

  return {
    isAuthenticated,
    signIn,
    signOut,
    currentUser,
  };
};

export default AuthProvider;
