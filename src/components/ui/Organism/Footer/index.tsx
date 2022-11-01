import { RouteCodes } from '@constants/routes';
import { Facebook, Instagram, Twitter, YouTube } from '@mui/icons-material';
import { Container, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import * as C from './styles';

const Footer = () => {
  return (
    <C.FooterContainer>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          padding: 5,
          height: 300,
        }}
      >
        <Grid
          container
          gap={15}
        >
          <Grid
            item
            display={'flex'}
            flexDirection={'column'}
          >
            <Typography variant="h5">Serviços</Typography>
            <C.ListBox>
              <C.ListItem>
                <Link to={RouteCodes.HOME}>
                  <Typography variant="subtitle1">
                    Assistência Técnica
                  </Typography>
                </Link>
              </C.ListItem>
              <C.ListItem>
                <Link to={RouteCodes.LOGIN}>
                  <Typography variant="subtitle1">Informática</Typography>
                </Link>
              </C.ListItem>
              <C.ListItem>
                <Link to={RouteCodes.TRABALHE_CONOSCO}>
                  <Typography variant="subtitle1">Encanador</Typography>
                </Link>
              </C.ListItem>
              <C.ListItem>
                <Link to={RouteCodes.SAIBA_MAIS}>
                  <Typography variant="subtitle1">Design</Typography>
                </Link>
              </C.ListItem>
            </C.ListBox>
          </Grid>
          <Grid
            item
            display={'flex'}
            flexDirection={'column'}
          >
            <Typography variant="h5">Institucional</Typography>
            <C.ListBox>
              <C.ListItem>
                <Link to={RouteCodes.HOME}>
                  <Typography variant="subtitle1">Quem somos</Typography>
                </Link>
              </C.ListItem>
              <C.ListItem>
                {' '}
                <Link to={RouteCodes.LOGIN}>
                  <Typography variant="subtitle1">Trabalhe conosco</Typography>
                </Link>
              </C.ListItem>
            </C.ListBox>
          </Grid>
          <Grid
            item
            display={'flex'}
            flexDirection={'column'}
          >
            <Typography variant="h5">Redes Sociais</Typography>
            <C.SocialMidia>
              <C.ListItem>
                <Link to={RouteCodes.HOME}>
                  <Instagram fontSize="large" />
                </Link>
              </C.ListItem>
              <C.ListItem>
                <Link to={RouteCodes.LOGIN}>
                  <Facebook fontSize="large" />
                </Link>
              </C.ListItem>
              <C.ListItem>
                <Link to={RouteCodes.LOGIN}>
                  <YouTube fontSize="large" />
                </Link>
              </C.ListItem>
              <C.ListItem>
                <Link to={RouteCodes.LOGIN}>
                  <Twitter fontSize="large" />
                </Link>
              </C.ListItem>
            </C.SocialMidia>
          </Grid>
        </Grid>
      </Container>
    </C.FooterContainer>
  );
};

export default Footer;
