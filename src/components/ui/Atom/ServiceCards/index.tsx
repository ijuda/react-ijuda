import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import { Star } from 'phosphor-react';

type Props = {
  data: any;
};

export const ServiceCards = ({ data }: Props) => {
  console.log(data);
  return (
    <Grid item>
      <Card
        sx={{ minWidth: 200, display: 'flex' }}
        variant="outlined"
      >
        <div style={{ backgroundColor: 'orange', width: 4 }}></div>
        <div>
          <CardContent sx={{ padding: 3 }}>
            <Typography
              variant="h5"
              component="div"
            >
              Assistência técnica
            </Typography>
            <Typography
              sx={{ mb: 1.5 }}
              color="text.secondary"
            >
              Computador desktop
            </Typography>
            <Typography
              fontSize={15}
              fontWeight={'bold'}
              textTransform={'uppercase'}
            >
              Mateus Cesar
            </Typography>
            <Typography
              fontSize={18}
              marginTop={2}
            >
              Fortaleza
            </Typography>
            <Typography
              sx={{ mb: 1.5 }}
              color="text.secondary"
            >
              Bonsucesso
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
                  component={'div'}
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
              sx={{ marginLeft: 1.3 }}
            >
              Entre em contato
            </Button>
          </CardActions>
        </div>
      </Card>
    </Grid>
  );
};
