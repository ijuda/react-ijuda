import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Desktop } from 'phosphor-react';
import * as C from './styles';

const ServicesContainerCard = () => {
  return (
    <Box
      id="card"
      display={'flex'}
      flexDirection="row"
      component={'div'}
      gap={5}
      marginTop={5}
    >
      <C.Card>
        <Desktop size={30} />
        <Typography variant="subtitle1">Tecnologia</Typography>
      </C.Card>
      <C.Card>
        <Desktop size={30} />
        <Typography variant="subtitle1">Assistência técnica</Typography>
      </C.Card>
      <C.Card>
        <Desktop size={30} />
        <Typography variant="subtitle1">Reformas</Typography>
      </C.Card>
      <C.Card>
        <Desktop size={30} />
        <Typography variant="subtitle1">Desemtupimentos</Typography>
      </C.Card>
      <C.Card>
        <Desktop size={30} />
        <Typography variant="subtitle1">Jardim</Typography>
      </C.Card>
      <C.Card>
        <Desktop size={30} />
        <Typography variant="subtitle1">Saúde</Typography>
      </C.Card>
      <C.Card>
        <Desktop size={30} />
        <Typography variant="subtitle1">Serviços domésticos</Typography>
      </C.Card>
    </Box>
  );
};

export default ServicesContainerCard;
