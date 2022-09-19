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

export const LogoContainer = styled.link`
  cursor: pointer;
`;

export const NavLinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
`;
