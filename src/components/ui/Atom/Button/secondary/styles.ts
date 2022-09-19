import styled from "styled-components";

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary_dark};
  border: none;
  font-size: 1.5rem;
  font-weight: 500;
  color: #fff;
  font-weight: bold;
  padding: 0.7rem;
  border-radius: 100px;
  cursor: pointer;
  margin-top: 1rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;
