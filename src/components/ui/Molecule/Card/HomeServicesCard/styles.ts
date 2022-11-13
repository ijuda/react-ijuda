import { orange } from '@mui/material/colors';
import styled from 'styled-components';

export const CardHeader = styled.header`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 1;

  &::after {
    position: absolute;
    background-color: ${orange[900]};
    width: 30px;
    height: 30px;
    left: 25px;
    top: 0px;
    clip-path: polygon(
      50% 0%,
      90% 20%,
      100% 60%,
      75% 100%,
      25% 100%,
      0% 60%,
      10% 20%
    );
    content: '';
    z-index: -1;
  }
`;
