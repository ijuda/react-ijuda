import { getAllPrestadorServico } from '@api/services/getAllPrestadorServico';
import { getAllServices } from '@api/services/getAllServices';
import profileImg from '@images/profileImage.svg';
import {
  Avatar,
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Switch,
  TextField,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { RegisterType, TService } from 'types';

const RegisterForm = ({
  email,
  name,
  password,
  cpf,
  phoneNumber,
  cep,
  cidade,
  number,
  rua,
  bairro,
  complemento,
  confirmPassword,
  isPasswordVisible,
  categoria,
  toggleHandler,
  setConfirmPassword,
  setCpf,
  setPassword,
  setPhoneNumber,
  handleSubmit,
  setEmail,
  setName,
  setCep,
  setCidade,
  setNumber,
  setRua,
  setComplemento,
  setBairro,
  selectChangeHandler,
}: RegisterType) => {
  const location = useLocation();
  const [service, setService] = useState<TService[]>();
  const CATEGORIAS_NAME = [
    'Assistência técnica',
    'Aulas',
    'Autos',
    'Consultoria',
    'Design e Tecnologia',
    'Eventos',
    'Moda e beleza',
    'Reforma e reparos',
    'Saúde',
    'Serviços Domésticos',
  ];

  useEffect(() => {
    const getServices = async () => {
      getAllServices()?.then((response) => setService(response.data));
    };
    getServices();
  }, []);

  console.log(service);

  return (
    <Grid container>
      <Grid
        item
        justifyContent={'center'}
        padding={5}
        width={'50%'}
      >
        <Box
          component={'div'}
          marginBottom={3}
        >
          <Typography
            fontSize={28}
            width={'100%'}
          >
            Preencha o formulário para cadastrar-se
          </Typography>
        </Box>
        <Box
          component={'form'}
          onSubmit={handleSubmit}
          noValidate
        >
          <Box
            component={'div'}
            display={'flex'}
            justifyContent={'space-between'}
          >
            <TextField
              margin="normal"
              required
              id="nome"
              label="Nome"
              name="text"
              autoComplete="nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoFocus
              sx={{ width: '100%', backgroundColor: 'black' }}
            />
          </Box>
          <Box component={'div'}>
            <TextField
              margin="normal"
              required
              name="email"
              label="Email"
              type="email"
              id="email"
              autoComplete="current-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ width: '100%', backgroundColor: 'black' }}
            />
          </Box>
          <Box
            component={'div'}
            display={'flex'}
            justifyContent={'space-between'}
          >
            <TextField
              margin="normal"
              required
              name="cpf"
              label="CPF"
              type="text"
              id="cpf"
              autoComplete="current-cpf"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              sx={{ width: '55%', backgroundColor: 'black' }}
            />
            <TextField
              margin="normal"
              required
              name="telefone"
              label="N telefone"
              type="text"
              id="telefone"
              autoComplete="current-telefone"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              sx={{ width: '40%', backgroundColor: 'black' }}
              inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
            />
          </Box>
          <Box
            component={'div'}
            display={'flex'}
            justifyContent={'space-between'}
          >
            <TextField
              margin="normal"
              required
              name="cidade"
              label="Cidade"
              type={'text'}
              id="cidade"
              autoComplete="current-cidade"
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
              sx={{ width: 250, backgroundColor: 'black' }}
            />
            <TextField
              margin="normal"
              required
              name="cep"
              label="CEP"
              type="text"
              id="cep"
              autoComplete="cep"
              value={cep}
              onChange={(e) => setCep(e.target.value)}
              sx={{ width: 250, backgroundColor: 'black' }}
            />
          </Box>
          <Box
            component={'div'}
            display={'flex'}
            justifyContent={'space-between'}
          >
            <TextField
              margin="normal"
              required
              name="rua"
              label="Rua"
              type={'text'}
              id="rua"
              autoComplete="current-rua"
              value={rua}
              onChange={(e) => setRua(e.target.value)}
              sx={{ width: '100%', backgroundColor: 'black' }}
            />
          </Box>
          <Box
            component={'div'}
            display={'flex'}
            justifyContent={'space-between'}
          >
            <TextField
              margin="normal"
              required
              name="bairro"
              label="bairro"
              type={'text'}
              id="bairro"
              autoComplete="current-bairro"
              value={bairro}
              onChange={(e) => setBairro(e.target.value)}
              sx={{ width: '100%', backgroundColor: 'black' }}
            />
          </Box>
          <Box
            component={'div'}
            display={'flex'}
            justifyContent={'space-between'}
          >
            <TextField
              margin="normal"
              required
              name="number"
              label="N°"
              type={'text'}
              id="number"
              autoComplete="current-number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              sx={{ width: 80, backgroundColor: 'black' }}
            />
            <TextField
              margin="normal"
              required
              name="complemento"
              label="Complemento"
              type={'text'}
              id="complemento"
              autoComplete="current-complemento"
              value={complemento}
              onChange={(e) => setComplemento(e.target.value)}
              sx={{ width: 420, backgroundColor: 'black' }}
            />
          </Box>
          {location.pathname === '/register/employee' ? (
            <Box
              component={'div'}
              display={'flex'}
              justifyContent={'space-between'}
            >
              <FormControl
                sx={{ width: '100%', margin: '5px 0px 5px 0px' }}
                size="medium"
              >
                <InputLabel id="demo-select-small">
                  Selecione sua categoria
                </InputLabel>
                <Select
                  sx={{ backgroundColor: '#000' }}
                  labelId="demo-select-small"
                  id="demo-select-small"
                  value={categoria}
                  label="Selecione sua categoria"
                  onChange={selectChangeHandler}
                >
                  <MenuItem value="">
                    <em>Selecione sua categoria</em>
                  </MenuItem>
                  {service?.map((item: TService) => (
                    <MenuItem
                      key={item.id}
                      value={item.id}
                    >
                      {item.nome}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          ) : null}
          <Box
            component={'div'}
            display={'flex'}
            justifyContent={'space-between'}
          >
            <TextField
              margin="normal"
              required
              name="password"
              label="Senha"
              type={isPasswordVisible ? 'text' : 'password'}
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{ width: 250, backgroundColor: 'black' }}
            />
            <TextField
              margin="normal"
              required
              name="confirm-password"
              label="Confirme a senha"
              type={isPasswordVisible ? 'text' : 'password'}
              id="confirm-password"
              autoComplete="current-confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              sx={{ width: 250, backgroundColor: 'black' }}
            />
          </Box>
          <Box
            component={'div'}
            display="flex"
            alignItems={'center'}
          >
            <Switch
              size="medium"
              aria-label="algo"
              value={isPasswordVisible}
              onChange={toggleHandler}
            />
            <Typography variant="subtitle2">Ver senha</Typography>
          </Box>
          <Box
            component={'div'}
            display={'flex'}
            width={'100%'}
            justifyContent={'end'}
          >
            <Button
              variant="contained"
              sx={{ width: 150, height: 50 }}
              onClick={handleSubmit}
            >
              Concluir
            </Button>
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        padding={5}
        width={'50%'}
      >
        <Box
          component={'div'}
          display={'flex'}
          flexDirection={'column'}
          alignItems={'center'}
          justifyContent={'center'}
          gap={4}
          marginTop={25}
        >
          <Avatar
            alt="Random profile image"
            src={profileImg}
            sx={{ width: 200, height: 200 }}
          />
          <Button
            variant="contained"
            disabled
          >
            Insira sua imagem
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default RegisterForm;
