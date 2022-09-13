import styled from "styled-components";

export const Button = styled.button`
  border: none;
  border-radius: 3px;
  box-shadow: 0px 0px 0px 2px ${({ theme }) => theme.colors.primary};
  display: block;
  cursor: pointer;
  padding: 1.5rem 3rem;

  background: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.primary_dark} 50%,
    ${({ theme }) => theme.colors.background} 50% 50%
  );
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.5rem;
  font-weight: 600;
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.5s ease-out;

  &:hover {
    background-position: left bottom;
    color: ${({ theme }) => theme.colors.white};
  }
`;