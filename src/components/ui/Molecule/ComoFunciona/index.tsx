import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import CardItem1 from '../../../../../public/images/CardItem_1.svg';
import CardItem3 from '../../../../../public/images/CardItem_3.svg';
import CardItem4 from '../../../../../public/images/CardItem_4.svg';
import * as C from './styles';

const ComoFunciona = () => {
  return (
    <C.ComoFuncionaSection>
      <Typography variant="h4">Como funciona o Ijuda?</Typography>
      <Grid
        container
        justifyContent={'space-between'}
        alignItems={'flex-start'}
        marginTop={6}
      >
        <Grid item>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            width={'300px'}
          >
            <img
              src={CardItem1}
              width={'300px'}
            />
            <Typography
              variant="subtitle1"
              marginTop={2}
              textAlign={'center'}
            >
              Se você precisa de ajuda, está no lugar certo! Nós temos a
              capacidade de lhe ajudar da melhor maneira.
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            width={'300px'}
          >
            <img
              src={CardItem3}
              width={'300px'}
            />
            <Typography
              variant="subtitle1"
              textAlign={'center'}
              marginTop={2}
            >
              Para ter acesso aos serviços que necessita, única coisa que você
              precisa fazer é <strong>cadastrar-se</strong>
            </Typography>
          </Box>
        </Grid>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          width={'300px'}
        >
          <img
            src={CardItem4}
            width={'300px'}
          />
          <Typography
            variant="subtitle1"
            textAlign={'center'}
            width={'300px'}
            marginTop={2}
          >
            No caso de ser um colaborador através de nossa plataforma você irá
            facilitar as pessoas lhe encontrarem! E caso você seja um cliente,
            você irá encontrar facilmente profissionais de alta qualidade!
          </Typography>
        </Box>
      </Grid>
    </C.ComoFuncionaSection>
  );
};

export default ComoFunciona;
