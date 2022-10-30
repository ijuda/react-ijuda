import RegisterCard from '@components/ui/Molecule/Card/RegisterCard';
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import * as C from './styles';

const Register = () => {
  const navigate = useNavigate();

  return (
    <C.Container>
      <Grid
        container
        direction={'row'}
        spacing={7}
        justifyContent="center"
      >
        <Grid item>
          <RegisterCard
            cardTitle="Cliente"
            cardContent="Está precisando de ajuda? Saiba que você está no lugar certo! Crie
                sua conta e usufrua dos serviços dos nossos colaboradores!"
            image={
              'https://images.unsplash.com/photo-1560250056-07ba64664864?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xpZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
            }
            alt={'testando'}
            pathToNavigate="/register/client"
          />
        </Grid>
        <Grid item>
          <RegisterCard
            cardTitle="Trabalhe conosco"
            cardContent="Seja um colaborador e impulsione o seu trabalho, onde milhares
                    de pessoas consigam lhe encontrar facilmente!"
            alt="testando"
            image={
              'https://images.unsplash.com/photo-1605152276897-4f618f831968?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2VydmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'
            }
            pathToNavigate="/register/employee"
          />
        </Grid>
      </Grid>
    </C.Container>
  );
};

export default Register;
