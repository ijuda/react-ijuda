import Layout from '@components/ui/Organism/Layout';
import { Box, Grid, TextField } from '@mui/material';
import * as C from './styles';

const RegisterClient = () => {
  const handleSubmit = () => {
    return '';
  };

  return (
    <Layout>
      <C.Container>
        <C.FormContainer>
          <Grid container>
            <Grid
              item
              justifyContent={'center'}
              padding={5}
            >
              <Box
                component={'form'}
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1, display: 'flex', gap: 2 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="nome"
                  label="Nome"
                  name="nome"
                  autoComplete="nome"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="nome"
                  label="Sobrenome"
                  type="nome"
                  id="nome"
                  autoComplete="current-nome"
                />
              </Box>
            </Grid>
          </Grid>
          <C.RightSide></C.RightSide>
        </C.FormContainer>
      </C.Container>
    </Layout>
  );
};

export default RegisterClient;
