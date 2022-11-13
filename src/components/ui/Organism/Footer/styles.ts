import { grey } from '@mui/material/colors';
import styled from 'styled-components';

export const FooterContainer = styled.div`
  margin-top: 10rem;
  background-color: ${grey[900]};
  width: 100%;
`;

export const ListBox = styled.ul`
  margin-top: 2rem;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const SocialMidia = styled.ul`
  margin-top: 2rem;
  list-style: none;
  display: flex;
  flex-direction: row;
  gap: 3rem;
`;

export const ListItem = styled.li`
  > a {
    text-decoration: none;
    color: ${grey[500]};

    &:hover {
      color: ${grey[600]};
    }
  }
`;

export const AllRightsSection = styled.div`
  padding: 15px 0;
`;
