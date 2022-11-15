import { doRegister } from '@api/auth/doRegister';
import RegisterForm from '@components/ui/Molecule/RegisterForm';
import Layout from '@components/ui/Organism/Layout';
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
  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const payload = {
      usuario: {
        nome: name,
        email: email,
        senha: password,
        permissoes: [{ id: 2 }],
      },
      cpf: cpf,
      telefone: phoneNumber,
      endereco: {
        rua: rua,
        bairro: bairro,
        numero: Number(number),
        complemento: complemento,
        cidade: cidade,
        pais: 'brasil',
        cep: cep,
      },
      ativo: true,
    };

    doRegister(payload);

    navigate('/login');
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
            toggleHandler={toggleHandler}
            handleSubmit={handleSubmit}
          />
        </C.FormContainer>
      </C.Container>
    </Layout>
  );
};

export default RegisterEmployee;
