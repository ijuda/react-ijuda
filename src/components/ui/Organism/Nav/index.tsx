import Button from "../../Atom/Button";
import Logo from "../../Atom/Logo/Index";
import * as C from "./styles";

const Nav = () => {
  return (
    <C.Nav>
      <C.LogoContainer href="#">
        <Logo />
      </C.LogoContainer>
      <C.NavLinkContainer>
        <Button type="tertiary" content="Entrar" />
        <Button type="primary" content="Trabalhe Conosco"/>
      </C.NavLinkContainer>
    </C.Nav>
  );
};

export default Nav;
