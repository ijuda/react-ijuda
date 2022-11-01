import Footer from '@components/ui/Organism/Footer';
import Header from '@components/ui/Organism/Header';
import { useAuth } from '@context/auth/AuthProvider';
import * as C from './styles';

type Props = {
  children: JSX.Element;
};

const Layout = ({ children }: Props) => {
  const { isAuthenticated, signOut, currentUser } = useAuth();
  return (
    <C.LayoutContainer>
      <Header
        currentUser={currentUser}
        isAuthenticated={isAuthenticated}
        signOut={signOut}
      />
      <C.ChildrenContainer>{children}</C.ChildrenContainer>
      <Footer />
    </C.LayoutContainer>
  );
};

export default Layout;
