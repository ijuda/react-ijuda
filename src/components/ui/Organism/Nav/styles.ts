import styled from "styled-components";

export const Nav = styled.nav`
  padding: 4rem 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    text-decoration: none;
  }
`;

export const LogoContainer = styled.a`
  cursor: pointer;
`;

export const NavLinkContainer = styled.a`
  display: flex;
  align-items: center;
  gap: 4rem;
`;
