import Button from "@components/ui/Atom/Button";
import Logo from "@components/ui/Atom/Logo";
import { RouteCodes as route } from "@constants/routes";
import { Link } from "react-router-dom";
import * as C from "./styles";

const Nav = () => {
  return (
    <C.Nav>
      <Link to={route.HOME}>
        <Logo />
      </Link>
      <C.NavLinkContainer>
        <Link to={route.LOGIN}>
          <Button type="tertiary" content="Entrar" />
        </Link>
        <Link to={route.REGISTER}>
          <Button type="primary" content="Trabalhe Conosco" />
        </Link>
      </C.NavLinkContainer>
    </C.Nav>
  );
};

export default Nav;
