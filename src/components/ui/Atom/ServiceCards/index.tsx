import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from '@mui/material';
import { orange } from '@mui/material/colors';
import { Box } from '@mui/system';
import { Star } from 'phosphor-react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

type Props = {
  id: number;
  prestadorServicoNome: string;
  bairro: string;
  cidade: string;
  serviceName: string;
  categoriaId?: number;
  categoriaName?: string;
};

export const ServiceCards = ({
  id,
  prestadorServicoNome,
  bairro,
  cidade,
  categoriaId,
  categoriaName,
  serviceName,
}: Props) => {
  const navigate = useNavigate();

  return (
    <Grid item>
      <Card
        sx={{ width: 250, display: 'flex' }}
        variant="outlined"
      >
        <div style={{ backgroundColor: 'orange', width: 4 }}></div>
        <div>
          <CardContent sx={{ padding: 3 }}>
            <Typography
              variant="h5"
              component="div"
            >
              {categoriaName}
            </Typography>
            <Typography
              sx={{ mb: 1.5 }}
              color="text.secondary"
            >
              {serviceName}
            </Typography>
            <Typography
              fontSize={15}
              fontWeight={'bold'}
              textTransform={'uppercase'}
            >
              {prestadorServicoNome}
            </Typography>
            <Typography
              fontSize={18}
              marginTop={2}
            >
              {cidade}
            </Typography>
            <Typography
              sx={{ mb: 1.5 }}
              color="text.secondary"
            >
              {bairro}
            </Typography>
            <Box
              id="nota-component"
              component={'div'}
              marginTop={2}
            >
              <Typography
                fontSize={20}
                fontWeight={'bold'}
                display={'flex'}
                alignItems={'center'}
                gap={2}
              >
                4.8
                <Box
                  component={'span'}
                  display={'flex'}
                  gap={1}
                >
                  <Star
                    weight="fill"
                    color="yellow"
                  />
                  <Star
                    weight="fill"
                    color="yellow"
                  />
                  <Star
                    weight="fill"
                    color="yellow"
                  />
                  <Star
                    weight="fill"
                    color="yellow"
                  />
                </Box>
              </Typography>
            </Box>
          </CardContent>
          <CardActions sx={{ paddingBottom: 2 }}>
            <Button
              size="small"
              variant="outlined"
              sx={{
                marginLeft: 1.3,
                ':hover': { backgroundColor: `${orange[900]}`, color: '#FFF' },
              }}
            >
              <a
                href={`https://wa.me/5585989717185`}
                target={'_blank'}
                rel="noreferrer"
                style={{ textDecoration: 'none', color: '#FFF' }}
              >
                Entre em contato
              </a>
            </Button>
          </CardActions>
        </div>
      </Card>
    </Grid>
  );
};
