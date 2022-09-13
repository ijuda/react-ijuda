import styled from "styled-components";

export const Button = styled.button`
  margin: 30px;
  padding: 1.5rem 3rem;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.5rem;
  border: none;
  box-shadow: 0px 0px 0px 2px ${({ theme }) => theme.colors.primary};
  font-weight: bold;
  cursor: pointer;
  border-radius: 2px;
`;
