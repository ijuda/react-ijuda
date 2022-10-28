import Nav from "@components/ui/Organism/Nav";
import { HeaderType } from "types";
import * as C from "./styles";

const Header = ({ isAuthenticated, signOut, currentUser }: HeaderType) => {
  return (
    <C.Header>
      <Nav
        isAuthenticated={isAuthenticated}
        signOut={signOut}
        currentUser={currentUser}
      />
    </C.Header>
  );
};

export default Header;
