import { Grid, Typography } from '@mui/material';
import { orange } from '@mui/material/colors';
import { Box, Container } from '@mui/system';
import {
  Bookmark,
  IdentificationCard,
  MapTrifold,
  Timer,
} from 'phosphor-react';
import * as C from './styles';

const OqueTemosDeBom = () => {
  return (
    <C.OqueTemosDeBomSection>
      <Container>
        <Typography
          marginBottom={8}
          variant={'h3'}
        >
          O que temos de bom?
        </Typography>
        <Grid
          container
          display={'flex'}
          justifyContent={'space-between'}
          gap={2}
        >
          <Grid item>
            <Box width={250}>
              <Box
                display={'flex'}
                alignItems={'center'}
                gap={4}
                marginBottom={3}
              >
                <MapTrifold
                  size={50}
                  color={`${orange[700]}`}
                />
                <Typography variant="h5">Buscar Serviços</Typography>
              </Box>
              <Typography>
                Encontre profissionais confiáveis olhando as demonstrações de
                seus trabalhos anteriores e lendo as avaliações em seus perfis.
              </Typography>
            </Box>
          </Grid>
          <Grid item>
            <Box width={250}>
              <Box
                display={'flex'}
                alignItems={'center'}
                gap={4}
                marginBottom={3}
              >
                <IdentificationCard
                  size={50}
                  color={`${orange[700]}`}
                />
                <Typography variant="h5">Ofertas rápidas</Typography>
              </Box>
              <Typography>
                Receba cotações sem compromisso de nossos talentosos freelancers
                rapidamente. 80% das solicitações recebem a primeira oferta
                dentro de 60 segundos.
              </Typography>
            </Box>
          </Grid>
          <Grid item>
            <Box width={250}>
              <Box
                display={'flex'}
                alignItems={'center'}
                gap={4}
                marginBottom={3}
              >
                <Bookmark
                  size={50}
                  color={`${orange[700]}`}
                />
                <Typography variant="h5">Trabalho de qualidade</Typography>
              </Box>
              <Typography>
                O Ijuda possui de longe o maior conjunto de freelancers de alta
                qualidade por todo o Brasil - mais de 10 milhões!
              </Typography>
            </Box>
          </Grid>
          <Grid item>
            <Box width={250}>
              <Box
                display={'flex'}
                alignItems={'center'}
                gap={4}
                marginBottom={3}
              >
                <Timer
                  size={50}
                  color={`${orange[700]}`}
                />
                <Typography variant="h5">Acompanhe o progresso</Typography>
              </Box>
              <Typography>
                Mantenha-se atualizado e no caminho certo com o nosso registro
                de tempo e o aplicativo móvel. Sempre saiba o que os freelancers
                estão fazendo.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </C.OqueTemosDeBomSection>
  );
};

export default OqueTemosDeBom;
