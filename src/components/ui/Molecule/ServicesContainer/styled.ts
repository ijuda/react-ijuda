import { grey, orange } from '@mui/material/colors';
import styled from 'styled-components';

export const Services = styled.section`
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  background-color: ${grey[900]};
  padding: 10rem;
  border-radius: 10px;
`;

export const ServicesList = styled.ul`
  list-style: none;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  padding: 40px;
`;

export const ServicesListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 20px;
  border: 2px solid #fff;
  border-radius: 10px;
  height: 120px;

  &:hover {
    background-color: ${orange[800]};
    cursor: pointer;
    border-radius: 10px;
  }
`;
