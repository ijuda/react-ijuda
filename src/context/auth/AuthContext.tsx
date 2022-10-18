import { createContext } from "react";

export type SignInCredentials = {
  email: string;
  password: string;
};

export type AuthContextType = {
  signIn: (credentials: SignInCredentials) => Promise<void>;
  signOut: () => void;
};

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);
