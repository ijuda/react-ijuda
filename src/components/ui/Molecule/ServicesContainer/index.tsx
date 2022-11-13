import {
  Computer,
  Engineering,
  Grass,
  Home,
  HomeRepairService,
  MedicalInformation,
  Plumbing,
  Psychology,
} from '@mui/icons-material';
import { Typography } from '@mui/material';
import * as C from './styled';

const ServicesContainer = () => {
  return (
    <C.Services>
      <Typography variant="h4">Categorias dos serviços</Typography>
      <C.ServicesList>
        <C.ServicesListItem>
          <Computer fontSize="large" />
          <Typography sx={{ fontWeight: 'bold' }}>Tecnologia</Typography>
        </C.ServicesListItem>
        <C.ServicesListItem>
          <HomeRepairService fontSize="large" />
          <Typography sx={{ fontWeight: 'bold' }}>Assitência Ténica</Typography>
        </C.ServicesListItem>
        <C.ServicesListItem>
          <Engineering fontSize="large" />
          <Typography sx={{ fontWeight: 'bold' }}>Reformas</Typography>
        </C.ServicesListItem>
        <C.ServicesListItem>
          <Plumbing fontSize="large" />
          <Typography sx={{ fontWeight: 'bold' }}>Desemtupimentos</Typography>
        </C.ServicesListItem>
        <C.ServicesListItem>
          <Grass fontSize="large" />
          <Typography sx={{ fontWeight: 'bold' }}>Jardim</Typography>
        </C.ServicesListItem>
        <C.ServicesListItem>
          <MedicalInformation fontSize="large" />
          <Typography sx={{ fontWeight: 'bold' }}>Saúde</Typography>
        </C.ServicesListItem>
        <C.ServicesListItem>
          <Home fontSize="large" />
          <Typography sx={{ fontWeight: 'bold' }}>
            Serviços Domésticos
          </Typography>
        </C.ServicesListItem>
      </C.ServicesList>
    </C.Services>
  );
};

export default ServicesContainer;
