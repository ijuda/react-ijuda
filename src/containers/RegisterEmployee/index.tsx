import { doRegisterEmployee } from '@api/auth/doRegisterEmployee';
import RegisterForm from '@components/ui/Molecule/RegisterForm';
import Layout from '@components/ui/Organism/Layout';
import { SelectChangeEvent } from '@mui/material';
import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as C from './styles';

const RegisterEmployee = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [cidade, setCidade] = useState('');
  const [rua, setRua] = useState('');
  const [number, setNumber] = useState('');
  const [complemento, setComplemento] = useState('');
  const [cep, setCep] = useState('');
  const [bairro, setBairro] = useState('');
  const [categoria, setCategoria] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const payload = {
      usuario: {
        nome: name,
        email: email,
        senha: password,
        permissoes: [{ id: 3 }],
      },
      ativo: true,
      telefone: phoneNumber,
      cpf: cpf,
      endereco: {
        rua: rua,
        bairro: bairro,
        numero: number,
        complemento: complemento,
        cidade: cidade,
        pais: 'brasil',
        cep: cep,
      },
      servicos: [
        {
          id: categoria,
        },
      ],
    };
    console.log(payload);

    doRegisterEmployee(payload);
    navigate('/login');
  };

  const selectHandleChange = (event: SelectChangeEvent) => {
    setCategoria(event.target.value);
    console.log({ categoria });
  };

  const toggleHandler = () => {
    if (isPasswordVisible) {
      setIsPasswordVisible(false);
    } else {
      setIsPasswordVisible(true);
    }
  };

  return (
    <Layout>
      <C.Container>
        <C.FormContainer>
          <RegisterForm
            name={name}
            email={email}
            cpf={cpf}
            phoneNumber={phoneNumber}
            password={password}
            confirmPassword={confirmPassword}
            cep={cep}
            cidade={cidade}
            number={number}
            rua={rua}
            bairro={bairro}
            complemento={complemento}
            categoria={categoria}
            isPasswordVisible={isPasswordVisible}
            setConfirmPassword={setConfirmPassword}
            setCpf={setCpf}
            setEmail={setEmail}
            setName={setName}
            setPassword={setPassword}
            setPhoneNumber={setPhoneNumber}
            setCep={setCep}
            setComplemento={setComplemento}
            setCidade={setCidade}
            setNumber={setNumber}
            setRua={setRua}
            setBairro={setBairro}
            selectChangeHandler={selectHandleChange}
            toggleHandler={toggleHandler}
            handleSubmit={handleSubmit}
          />
        </C.FormContainer>
      </C.Container>
    </Layout>
  );
};

export default RegisterEmployee;
