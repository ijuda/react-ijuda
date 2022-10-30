import styled from 'styled-components';

export const Button = styled.button`
  border: none;
  border-radius: 3px;
  box-shadow: 0px 0px 0px 2px #fd7e14;
  display: block;
  cursor: pointer;
  padding: 1.5rem 3rem;

  background: linear-gradient(
    to right,
    #f76707 50%,
    ${({ theme }) => theme.colors.background} 50% 50%
  );
  color: #fd7e14;
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
