import { User } from "../types/User";
import { createContext } from "react";

export type AuthContextType = {
  user: User | null;
  signIn: (email: string, password: string) => Promise<Boolean>;
  signOut: () => void;
};

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);
