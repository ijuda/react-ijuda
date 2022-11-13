import { Star } from '@mui/icons-material';
import { Card, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import * as C from './styles';

type Props = {
  CardIcon: JSX.Element;
  CardCategory: string;
  CardDescription: string;
  NotaValue: string;
};

const HomeServicesCard = ({
  CardIcon,
  CardCategory,
  CardDescription,
  NotaValue,
}: Props) => {
  return (
    <Card
      sx={{ width: 300, height: 350, padding: 1 }}
      elevation={2}
    >
      <CardContent>
        <C.CardHeader>
          {CardIcon}
          <Typography
            gutterBottom
            component="div"
            marginLeft={0.5}
            marginTop={1}
            fontSize={18}
          >
            <Link
              to={'/'}
              style={{ textDecoration: 'none', color: '#29b6f6' }}
            >
              {CardCategory}
            </Link>
          </Typography>
        </C.CardHeader>
        <Typography
          variant="h5"
          color="white"
          marginLeft={0.5}
          marginTop={5}
        >
          {CardDescription}
        </Typography>
        <Typography
          variant="subtitle1"
          color="white"
          marginLeft={0.5}
          marginTop={1}
        >
          Avaliação do cliente
        </Typography>
        <div style={{ marginTop: 30, marginLeft: 2 }}>
          <Typography
            display={'flex'}
            alignItems={'center'}
            gap={1}
            variant={'h5'}
          >
            {NotaValue}
            <Star
              sx={{ color: 'yellow' }}
              fontSize="medium"
            />
            <Star
              sx={{ color: 'yellow' }}
              fontSize="medium"
            />
            <Star
              sx={{ color: 'yellow' }}
              fontSize="medium"
            />
            <Star
              sx={{ color: 'yellow' }}
              fontSize="medium"
            />
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default HomeServicesCard;
