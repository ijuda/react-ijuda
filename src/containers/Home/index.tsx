import HomeImage from '@assets/Home/HomeImage';
import ComoFunciona from '@components/ui/Molecule/ComoFunciona';
import NumerosSection from '@components/ui/Molecule/NumerosSection';
import ServicesContainer from '@components/ui/Molecule/ServicesContainer';
import Layout from '@components/ui/Organism/Layout';
import { Button, Container, Grid } from '@mui/material';
import * as C from './styles';

const Home = () => {
  return (
    <Layout>
      <C.HomeContainer>
        <Container
          sx={{ marginTop: 4 }}
          maxWidth="lg"
        >
          <Grid
            container
            spacing={2}
          >
            <Grid
              item
              xs={6}
            >
              <C.Title>
                Tudo que você precisa encontra-se em um só lugar!
              </C.Title>
              <C.Subtitle>
                {' '}
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Laboriosam illum repudiandae, nemo voluptate esse repellat neque
                rerum maiores recusandae sunt ea magni! Enim placeat
                necessitatibus reiciendis fugit adipisci soluta ut?{' '}
              </C.Subtitle>
              <Button
                variant="contained"
                sx={{ marginTop: 6, padding: 2 }}
              >
                Conheça nossos serviços
              </Button>
            </Grid>
            <Grid
              item
              xs={4}
            >
              <HomeImage />
            </Grid>
          </Grid>
          <ServicesContainer />
          <ComoFunciona />
        </Container>
        <NumerosSection />
      </C.HomeContainer>
    </Layout>
  );
};

export default Home;
