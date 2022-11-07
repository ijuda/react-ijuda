import { Grid, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import * as C from './styles';

const NumerosSection = () => {
  return (
    <C.NumerosSection>
      <Container maxWidth="lg">
        <Grid
          container
          display={'flex'}
          justifyContent={'space-between'}
        >
          <Grid
            item
            display={'flex'}
            alignItems={'center'}
            gap={10}
          >
            <Box
              display={'flex'}
              justifyContent="space-between"
              alignItems={'center'}
              flexDirection="column"
              gap={5}
              textAlign="center"
            >
              <Typography
                variant="h4"
                sx={{ boxShadow: '0px 4px 0px 0px #ef6c00' }}
              >
                2.000.000
              </Typography>
              <Typography variant="h6">
                De serviços solicitados no ano de 2021
              </Typography>
            </Box>
          </Grid>
          <Grid item>
            <Box
              display={'flex'}
              justifyContent="center"
              alignItems={'center'}
              flexDirection="column"
              gap={5}
            >
              <Typography
                variant="h4"
                sx={{ boxShadow: '0px 4px 0px 0px #ef6c00' }}
              >
                90.000
              </Typography>
              <Typography variant="h6">Clientes felizes por mês</Typography>
            </Box>
          </Grid>
          <Grid item>
            <Box
              display={'flex'}
              justifyContent="center"
              alignItems={'center'}
              flexDirection="column"
              gap={5}
            >
              <Typography
                variant="h4"
                sx={{ boxShadow: '0px 4px 0px 0px #ef6c00' }}
              >
                R$ 600.000.000
              </Typography>
              <Typography variant="h6">
                Valor gerado aos profissionais por ano!
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </C.NumerosSection>
  );
};

export default NumerosSection;
