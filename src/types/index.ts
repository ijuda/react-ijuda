type SignInCredentials = {
  email: string;
  password: string;
};

type AuthContextType = {
  signIn: (credentials: SignInCredentials) => Promise<void>;
  signOut: () => void;
  isAuthenticated: boolean;
  currentUser: UserType;
};

type HeaderType = {
  signOut: () => void;
  isAuthenticated: boolean;
  currentUser: UserType;
};

type UserType = {
  id: string;
  nome: string;
  email: string;
  profileImage?: any;
};

export type { AuthContextType, SignInCredentials, HeaderType, UserType };
