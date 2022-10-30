import styled from 'styled-components';

export const Input = styled.input`
  background-color: #09090a;
  border: none;
  padding: 1.7rem;
  border-radius: 8px;
  width: 25rem;
  color: #fff;

  &:focus {
    outline: none !important;
    box-shadow: 0 0 0 2px #f76707;
  }

  &::placeholder {
    color: #8d8d99;
  }
`;
