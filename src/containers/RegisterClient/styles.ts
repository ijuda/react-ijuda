import styled from 'styled-components';
import { grey } from '@mui/material/colors';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormContainer = styled.div`
  border-radius: 10px;
  width: 120rem;
  height: 60rem;
  background-color: ${grey[900]};
`;

const RightSide = styled.div``;

export { Container, FormContainer, RightSide };
