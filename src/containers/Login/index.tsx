import Facebook from '@assets/Social/Facebook';
import Google from '@assets/Social/Google';
import Linkedin from '@assets/Social/Linkedin';
import Logo from '@components/ui/Atom/Logo';
import { useAuth } from '@context/auth/AuthProvider';
import { Box, Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as C from './styles';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = useAuth();

  const handleLogin = async () => {
    const data = {
      email,
      password,
    };
    await signIn(data);
  };

  return (
    <C.LoginContainer>
      <C.FormContainer>
        <C.LogoBox>
          <Logo color="#FFF" />
        </C.LogoBox>
        <C.FormBox>
          <C.Title>Conecte-se</C.Title>
          <C.SocialLogin>
            <Google />
            <Linkedin />
            <Facebook />
          </C.SocialLogin>
          <Box
            width={250}
            mt={3}
            display={'flex'}
            flexDirection={'column'}
            gap={3}
          >
            <TextField
              sx={{ bgcolor: 'black' }}
              label="Insira seu email"
              variant="outlined"
              fullWidth
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <TextField
              sx={{ bgcolor: 'black' }}
              label="Insira sua senha"
              type={'password'}
              variant="outlined"
              fullWidth
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              onKeyUp={(e) => (e.key == 'Enter' ? handleLogin() : '')}
            />
          </Box>
          <Box
            width={250}
            mt={3}
          >
            <Button
              variant="contained"
              fullWidth
              onClick={handleLogin}
            >
              Entrar
            </Button>
          </Box>
          <C.RegisterLink>
            Não possui conta? <Link to="/register">Cadastre-se</Link>.
          </C.RegisterLink>
        </C.FormBox>
      </C.FormContainer>
    </C.LoginContainer>
  );
};

export default Login;
