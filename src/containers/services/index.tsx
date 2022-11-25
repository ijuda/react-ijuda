import { getAllPrestadorServico } from '@api/services/getAllPrestadorServico';
import { getAllCategories } from '@api/services/getAllCategories';
import { ServiceCards } from '@components/ui/Atom/ServiceCards';
import ServicesContainerCard from '@components/ui/Atom/ServiceContainerCards';
import Layout from '@components/ui/Organism/Layout';
import { Search } from '@mui/icons-material';
import {
  Button,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Skeleton,
  TextField,
  Typography,
} from '@mui/material';
import { Box, Container } from '@mui/system';
import { IData } from 'interfaces';
import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import * as C from './styles';
import { TCategoria } from 'types';

const Services = () => {
  const { id } = useParams<string>();
  const [data, setData] = useState<IData[]>();
  const [searchString, setSearchString] = useState<any>(id);
  const [loading, setLoading] = useState(true);
  const [servicos, setServicos] = useState<TCategoria[]>();

  useEffect(() => {
    const getServices = async () => {
      await getAllPrestadorServico()?.then((response) =>
        setData(response.data)
      );
      await getAllCategories()?.then((response) => setServicos(response.data));
      setLoading(false);
    };
    getServices();
  }, []);

  const servicosFiltro = data?.filter(
    (data) =>
      data?.servicos[0]?.nome
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .includes(
          searchString
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLowerCase()
        ) ||
      data?.servicos[0]?.categoria.nome
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .includes(
          searchString
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLowerCase()
        )
  );

  const cardCategoryHandler = (value: string) => {
    setSearchString(value);
  };

  return (
    <Layout>
      {loading ? (
        <React.Fragment>
          <Skeleton
            variant="rectangular"
            width={600}
            height={60}
            sx={{ margin: '0 auto', borderRadius: 2, marginTop: 4 }}
          />
          <Box>
            <Skeleton
              variant="rectangular"
              width={600}
              height={60}
              sx={{ margin: '0 auto', borderRadius: 2, marginTop: 7 }}
            />
          </Box>
        </React.Fragment>
      ) : (
        <Box component={'div'}>
          <C.ServicesContainer>
            <Box
              id="services-card-container"
              component={'div'}
              display={'flex'}
              justifyContent={'center'}
              flexDirection={'column'}
              alignItems={'center'}
            >
              <Typography
                variant="h4"
                marginRight={150}
              >
                Categorias
              </Typography>
              <ServicesContainerCard
                categorias={servicos}
                cardCategoryHandler={cardCategoryHandler}
              />
            </Box>
            <Container>
              <Box
                component={'div'}
                display="flex"
                justifyContent={'center'}
                gap={10}
                alignItems="center"
              >
                <TextField
                  sx={{ width: 550 }}
                  placeholder="Informe o serviço ou categoria desejada"
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
                  value={searchString}
                  onChange={(e) => setSearchString(e.target.value)}
                />
                {/* <FormControl
                  size="medium"
                  sx={{ width: 550 }}
                >
                  <InputLabel id="demo-select-small">Cidade</InputLabel>
                  <Select
                    sx={{ backgroundColor: '#000' }}
                    labelId="demo-select-small"
                    id="demo-select-small"
                    // value={categoria}
                    label="Selecione sua categoria"
                    style={{ height: 70 }}
                    // onChange={selectChangeHandler}
                  >
                    <MenuItem value="">
                      <em>Selecione sua categoria</em>
                    </MenuItem>
                  </Select>
                </FormControl> */}
              </Box>
            </Container>
            <Container>
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
                  {servicosFiltro?.map((item: IData) => {
                    return (
                      <ServiceCards
                        key={item.id}
                        id={item.id}
                        bairro={item.endereco.bairro}
                        cidade={item.endereco.cidade}
                        prestadorServicoNome={item.usuario.nome}
                        serviceName={item.servicos[0]?.nome}
                        categoriaName={item.servicos[0]?.categoria?.nome}
                        categoriaId={item.servicos[0]?.categoria?.id}
                      />
                    );
                  })}
                </Grid>
              </Box>
            </Container>
          </C.ServicesContainer>
        </Box>
      )}
    </Layout>
  );
};

export default Services;
