// import Button from "@components/ui/Atom/Button";
import Logo from "@components/ui/Atom/Logo";
import { RouteCodes as route } from "@constants/routes";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import * as C from "./styles";

const Nav = () => {
  return (
    <C.Nav>
      <Link to={route.HOME}>
        <Logo />
      </Link>
      <C.NavLinkContainer>
        <Link to={route.LOGIN}>
          <Button
            sx={{
              fontSize: "1.5rem",
              ":hover": { backgroundColor: "#ef6c00", color: "#FFF" },
            }}
          >
            Entrar
          </Button>
        </Link>
        <Link to={route.REGISTER}>
          <Button
            sx={{ fontSize: "1.5rem", padding: "1.5rem" }}
            variant="contained"
          >
            Trabalhe Conosco
          </Button>
        </Link>
      </C.NavLinkContainer>
    </C.Nav>
  );
};

export default Nav;
