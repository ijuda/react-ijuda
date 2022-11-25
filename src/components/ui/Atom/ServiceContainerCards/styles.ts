import { lightBlue } from '@mui/material/colors';
import styled from 'styled-components';

export const Card = styled.div`
  padding: 10px;
  border: 1px solid #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 5px;
  width: 120px;
  cursor: pointer;
  transition: 0.2s all;

  &:hover {
    color: ${lightBlue[300]};
    border-color: ${lightBlue[300]};
  }

  &:active {
    color: ${lightBlue[300]};
    border-color: ${lightBlue[300]};
  }
`;
