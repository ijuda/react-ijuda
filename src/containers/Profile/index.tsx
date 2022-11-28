import { getUserByEmail } from '@api/services/getUserByEmail';
import Layout from '@components/ui/Organism/Layout';
import { useAuth } from '@context/auth/AuthProvider';
import { Box, Button, TextField, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { Container } from '@mui/system';
import { useEffect, useState } from 'react';

const Profile = () => {
  const { currentUser } = useAuth();
  const [name, setName] = useState('Mateus');
  console.log(currentUser.user_name);
  const [email, setEmail] = useState('Mateus');

  useEffect(() => {
    const getUser = async () => {
      const response: any = await getUserByEmail(currentUser.user_name);
      setName(response.nome);
      setEmail(response.email);
    };
    getUser();
  }, []);

  return (
    <Layout>
      <Container>
        <Box>
          <Typography variant="h3">Editar perfil</Typography>
          <Box
            display={'flex'}
            flexDirection={'column'}
          >
            <TextField
              variant="filled"
              label={'Nome de usuário'}
              InputLabelProps={{ sx: { fontSize: 20 } }}
              InputProps={{
                sx: { fontSize: 15, padding: '5px 0px 5px 0px' },
              }}
              sx={{ backgroundColor: 'black', marginTop: 5, width: 500 }}
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></TextField>
            <TextField
              variant="filled"
              label={'E-mail'}
              InputLabelProps={{ sx: { fontSize: 20 } }}
              InputProps={{
                sx: { fontSize: 15, padding: '5px 0px 5px 0px' },
              }}
              sx={{ backgroundColor: 'black', marginTop: 5, width: 500 }}
              value={email}
              onChange={(e) => setName(e.target.value)}
            ></TextField>
            <Box
              display={'flex'}
              justifyContent="flex-end"
              width={500}
            >
              <Button
                variant="contained"
                sx={{
                  width: 100,
                  marginTop: 5,
                  padding: 1,
                  fontWeight: 'bold',
                }}
              >
                {' '}
                Atualizar
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Layout>
  );
};

export default Profile;
