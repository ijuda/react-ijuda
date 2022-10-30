import styled from 'styled-components';

export const Button = styled.button`
  font-size: 1.8rem;
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  font-weight: 600;
`;
