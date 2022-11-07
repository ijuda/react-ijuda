import { grey, orange } from '@mui/material/colors';
import styled from 'styled-components';

export const Services = styled.section`
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  background-color: ${grey[900]};
  padding: 4rem;
  border-radius: 10px;
`;

export const ServicesList = styled.ul`
  list-style: none;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 3rem;
  padding: 40px;
`;

export const ServicesListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 10px;

  &:hover {
    background-color: ${orange[800]};
    cursor: pointer;
    border-radius: 10px;
  }
`;
