import Login from "@containers/Login";
import Profile from "@containers/Profile";
import Register from "@containers/Register";
import { useAuth } from "@context/auth/AuthProvider";
import React from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  children: JSX.Element;
};

const RequireAuth = ({ children }: Props) => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  if (isAuthenticated) {
    return children;
  } else {
    return <Login />;
  }
};

export default RequireAuth;
