import Login from '@containers/Login';
import { useAuth } from '@context/auth/AuthProvider';
import { useNavigate } from 'react-router-dom';

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
