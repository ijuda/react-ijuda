import HomeImage from "@assets/Home/HomeImage";
import Header from "@components/ui/Organism/Header";
import { useAuth } from "@context/auth/AuthProvider";
import { Button, Container, Grid } from "@mui/material";
import * as C from "./styles";

const Home = () => {
  const { isAuthenticated, signOut, currentUser } = useAuth();
  return (
    <C.HomeContainer>
      <Header
        isAuthenticated={isAuthenticated}
        signOut={signOut}
        currentUser={currentUser}
      />
      <Container sx={{ marginTop: 4 }} maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <C.Title>Tudo que você precisa encontra-se em um só lugar!</C.Title>
            <C.Subtitle>
              {" "}
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Laboriosam illum repudiandae, nemo voluptate esse repellat neque
              rerum maiores recusandae sunt ea magni! Enim placeat
              necessitatibus reiciendis fugit adipisci soluta ut?{" "}
            </C.Subtitle>
            <Button variant="contained" sx={{ marginTop: 6, padding: 2 }}>
              Conheça nossos serviços
            </Button>
          </Grid>
          <Grid item xs={4}>
            <HomeImage />
          </Grid>
        </Grid>
      </Container>
    </C.HomeContainer>
  );
};

export default Home;
