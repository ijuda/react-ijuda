import HomeImage from '@assets/Home/HomeImage';
import HomeServicesCard from '@components/ui/Molecule/Card/HomeServicesCard';
import ComoFunciona from '@components/ui/Molecule/ComoFunciona';
import NumerosSection from '@components/ui/Molecule/NumerosSection';
import OqueTemosDeBom from '@components/ui/Molecule/OqueTemosDeBom';
import ServicesContainer from '@components/ui/Molecule/ServicesContainer';
import Layout from '@components/ui/Organism/Layout';
import { Button, Container, Grid, Typography } from '@mui/material';
import { Book, Heartbeat, Wrench } from 'phosphor-react';
import { useNavigate } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import * as C from './styles';

const Home = () => {
  const navigate = useNavigate();

  const scrollTo = () => {
    scroll.scrollTo(700);
  };
  return (
    <Layout>
      <C.HomeContainer>
        <Container
          sx={{ marginTop: 4 }}
          component={'div'}
          maxWidth={'lg'}
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
                Está preparado para alavancar a sua quantidade de servicos? Você
                está querendo encontrar um servico de qualidade de uma forma
                rápida, simples e eficaz? Pois sejam bem vindos ao{' '}
                <strong style={{ color: 'orange' }}>IJUDA!</strong> A melhor
                solucao em servicos do mercado, conte conosco!
              </C.Subtitle>
              <Button
                variant="contained"
                onClick={() => scrollTo()}
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
        </Container>
        <ServicesContainer />
        <Container>
          <ComoFunciona />
          <Typography
            variant="h3"
            textAlign={'center'}
            marginTop={7}
          >
            Serviços mais solicitados
          </Typography>
          <C.HomeCardContainer>
            <HomeServicesCard
              CardCategory="Saúde"
              CardDescription="Psicólogo"
              CardIcon={<Heartbeat size={50} />}
              NotaValue={'4.5'}
            />
            <HomeServicesCard
              CardCategory="Aulas"
              CardDescription="Aula de inglês"
              CardIcon={<Book size={50} />}
              NotaValue={'4.8'}
            />
            <HomeServicesCard
              CardCategory="Reformas e reparos"
              CardDescription="Troca de fiação elétrica"
              CardIcon={<Wrench size={50} />}
              NotaValue={'5.0'}
            />
          </C.HomeCardContainer>
        </Container>
        <NumerosSection />
        <OqueTemosDeBom />
      </C.HomeContainer>
    </Layout>
  );
};

export default Home;
