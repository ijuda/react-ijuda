import { getAllCategories } from '@api/services/getAllCategories';
import { Computer } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import {
  Balloon,
  Book,
  Car,
  Desktop,
  EyeClosed,
  Heartbeat,
  MagicWand,
  PaintBrushHousehold,
  Wrench,
} from 'phosphor-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { TCategoria } from 'types';
import * as C from './styled';

const ServicesContainer = () => {
  const [categorias, setCategorias] = useState<TCategoria[]>();

  useEffect(() => {
    const getServices = async () => {
      await getAllCategories()?.then((response) =>
        setCategorias(response.data)
      );
    };
    getServices();
  }, []);

  const getCardIcon = (name: string) => {
    switch (name) {
      case 'Assistência técnica':
        return <Desktop size={30} />;
      case 'Aulas':
        return <Book size={30} />;
      case 'Autos':
        return <Car size={30} />;
      case 'Consultoria':
        return <MagicWand size={30} />;
      case 'Design e Tecnologia':
        return <EyeClosed size={30} />;
      case 'Eventos':
        return <Balloon size={30} />;
      case 'Moda e beleza':
        return <EyeClosed size={30} />;
      case 'Saúde':
        return <Heartbeat size={30} />;
      case 'Serviços Domésticos':
        return <PaintBrushHousehold size={30} />;
      case 'Reforma e reparos':
        return <Wrench size={30} />;
    }
  };

  return (
    <C.Services>
      <Typography variant="h3">Categorias dos serviços</Typography>
      <C.ServicesList>
        {categorias?.map((categoria: TCategoria) => (
          <Box
            component={'div'}
            key={categoria.id}
            width={130}
          >
            <Link
              to={'/services'}
              style={{ textDecoration: 'none', color: '#FFF' }}
            >
              <C.ServicesListItem>
                <Box component={'div'}>{getCardIcon(categoria.nome)}</Box>
                <Typography sx={{ fontWeight: 'bold', fontSize: 16 }}>
                  {categoria.nome}
                </Typography>
              </C.ServicesListItem>
            </Link>
          </Box>
        ))}
      </C.ServicesList>
    </C.Services>
  );
};

export default ServicesContainer;
