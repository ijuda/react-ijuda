// import Button from "@components/ui/Atom/Button";
import Logo from "@components/ui/Atom/Logo";
import { RouteCodes as route } from "@constants/routes";
import { Logout } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { HeaderType } from "types";
import * as C from "./styles";

const Nav = ({ signOut, isAuthenticated, currentUser }: HeaderType) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const getProfileImage = (name: string) => {
    return `https://ui-avatars.com/api/?name=${name}`;
  };

  const menuProfileClick = () => {
    navigate("/profile");
  };

  return (
    <C.Nav>
      <Link to={route.HOME}>
        <Logo />
      </Link>
      <C.NavLinkContainer>
        {isAuthenticated ? (
          <React.Fragment>
            <Tooltip title="Profile">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <Avatar
                  alt="person"
                  src={
                    currentUser.profileImage
                      ? currentUser.profileImage
                      : getProfileImage(currentUser.nome)
                  }
                  sx={{ width: 80, height: 80, cursor: "pointer" }}
                ></Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem onClick={menuProfileClick}>
                <Avatar /> Profile
              </MenuItem>
              <Divider />
              <MenuItem onClick={signOut}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </React.Fragment>
        ) : (
          <React.Fragment>
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
            <Link to={route.REGISTER_EMPLOYEE}>
              <Button
                sx={{ fontSize: "1.5rem", padding: "1.5rem" }}
                variant="contained"
              >
                Trabalhe Conosco
              </Button>
            </Link>
          </React.Fragment>
        )}
      </C.NavLinkContainer>
    </C.Nav>
  );
};

export default Nav;
