import { RouteCodes } from '@constants/routes';
import { Facebook, Instagram, Twitter, YouTube } from '@mui/icons-material';
import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import * as C from './styles';

const Footer = () => {
  return (
    <React.Fragment>
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
                  <Link to={`${RouteCodes.SERVICES}/Assistência Técnica`}>
                    <Typography variant="subtitle1">
                      Assistência Técnica
                    </Typography>
                  </Link>
                </C.ListItem>
                <C.ListItem>
                  <Link to={`${RouteCodes.SERVICES}/Informática`}>
                    <Typography variant="subtitle1">Informática</Typography>
                  </Link>
                </C.ListItem>
                <C.ListItem>
                  <Link to={`${RouteCodes.SERVICES}/Encanador`}>
                    <Typography variant="subtitle1">Encanador</Typography>
                  </Link>
                </C.ListItem>
                <C.ListItem>
                  <Link to={`${RouteCodes.SERVICES}/Design`}>
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
                    <Typography variant="subtitle1">
                      Trabalhe conosco
                    </Typography>
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
      <div style={{ backgroundColor: '#e65100' }}>
        <Container>
          <C.AllRightsSection>
            <Typography
              variant="h6"
              letterSpacing={1}
            >
              ©2022, Ijuda serviços de internet. Fortaleza/CE - Brazil.
            </Typography>
          </C.AllRightsSection>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Footer;
