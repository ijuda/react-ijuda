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
import { TCategoria } from 'types';
import * as C from './styles';

type Props = {
  categorias: any;
  cardCategoryHandler: (value: string) => void;
};

const ServicesContainerCard = ({ categorias, cardCategoryHandler }: Props) => {
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
    <Box
      id="card"
      display={'flex'}
      flexDirection="row"
      component={'div'}
      gap={2}
      justifyContent={'center'}
      marginTop={5}
    >
      {categorias?.map((categoria: TCategoria) => (
        <C.Card
          key={categoria.id}
          onClick={() => cardCategoryHandler(categoria.nome)}
        >
          <Box component={'div'}>{getCardIcon(categoria.nome)}</Box>
          <Typography variant="subtitle1">{categoria.nome}</Typography>
        </C.Card>
      ))}
    </Box>
  );
};

export default ServicesContainerCard;
