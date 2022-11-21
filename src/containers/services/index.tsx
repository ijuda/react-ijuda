import { getAllServices } from '@api/services/getAllServices';
import { ServiceCards } from '@components/ui/Atom/ServiceCards';
import ServicesContainerCard from '@components/ui/Atom/ServiceContainerCards';
import Layout from '@components/ui/Organism/Layout';
import { Search } from '@mui/icons-material';
import {
  Button,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import { Box, Container } from '@mui/system';
import { useEffect, useState } from 'react';
import * as C from './styles';

const Services = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    const getServices = async () => {
      await getAllServices()?.then((response) => setData(response.data));
    };
    getServices();
  }, []);

  return (
    <Layout>
      <Container>
        <C.ServicesContainer>
          <Box
            component={'div'}
            display="flex"
            justifyContent={'center'}
            alignItems="center"
          >
            <TextField
              sx={{ width: 550, marginTop: 10 }}
              placeholder="Informe o serviço desejado"
              InputProps={{
                sx: { height: 80, fontSize: 20 },
                startAdornment: (
                  <InputAdornment position="start">
                    <Search fontSize="large" />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <Button
                      variant="contained"
                      sx={{ height: 50 }}
                    >
                      Search
                    </Button>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box
            id="services-card-container"
            component={'div'}
          >
            <Typography variant="h5">Categorias</Typography>
            <ServicesContainerCard />
          </Box>
          <Box
            id="services-cards"
            component={'div'}
            display="flex"
          >
            <Grid
              container
              alignItems={'center'}
              justifyContent={'center'}
              gap={4}
            >
              <ServiceCards data={data} />
              <ServiceCards data={data} />
              <ServiceCards data={data} />
              <ServiceCards data={data} />
              <ServiceCards data={data} />
              <ServiceCards data={data} />
              <ServiceCards data={data} />
              <ServiceCards data={data} />
            </Grid>
          </Box>
        </C.ServicesContainer>
      </Container>
    </Layout>
  );
};

export default Services;
