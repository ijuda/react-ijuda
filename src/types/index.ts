import { SelectChangeEvent } from '@mui/material';
import { FormEvent } from 'react';

type SignInCredentials = {
  email: string;
  password: string;
};

type AuthContextType = {
  signIn: (credentials: SignInCredentials) => Promise<void>;
  signOut: () => void;
  isAuthenticated: boolean;
  currentUser: UserType;
};

type HeaderType = {
  signOut: () => void;
  isAuthenticated: boolean;
  currentUser: UserType;
};

type UserType = {
  id: string;
  nome: string;
  email: string;
  profileImage?: any;
};

type RegisterType = {
  handleSubmit: (event: FormEvent) => void;
  name: string;
  setName: (event: string) => void;
  email: string;
  setEmail: (event: string) => void;
  cpf: string;
  setCpf: (event: string) => void;
  phoneNumber: string;
  setPhoneNumber: (event: string) => void;
  password: string;
  setPassword: (event: string) => void;
  confirmPassword: string;
  setConfirmPassword: (event: string) => void;
  isPasswordVisible: boolean;
  cidade: string;
  setCidade: (event: string) => void;
  cep: string;
  setCep: (event: string) => void;
  number: string;
  setNumber: (event: string) => void;
  rua: string;
  setRua: (event: string) => void;
  complemento: string;
  setComplemento: (event: string) => void;
  bairro: string;
  setBairro: (event: string) => void;
  categoria?: string;
  selectChangeHandler?: (event: SelectChangeEvent) => void;
  toggleHandler: () => void;
};

type TData = {
  id?: number | any;
  telefone: string | any;
  cpf: string | any;
  endereco: {
    rua: string | any;
    bairro: string | any;
    numero: number;
    complemento: string | any;
    cidade: string | any;
    pais: string | any;
    cep: string | any;
  };
  ativo: true | any;
  usuario: {
    id: number | any;
    nome: string | any;
    email: string | any;
    senha: string | any;
    permissoes: [
      {
        id: number | any;
        descricao: string | any;
      }
    ];
    imagem: null | any;
  };
  servicos: [
    {
      id: number | any;
      nome: string | any;
      valor: number | any;
      categoria: {
        id: number | any;
        nome: string | any;
      };
    }
  ];
};

type TCategoria = {
  id: number;
  nome: string;
};

type TService = {
  id: number;
  nome: string;
  valor: number;
  categoria: {
    id: number;
    nome: string;
  };
};

export type {
  AuthContextType,
  SignInCredentials,
  HeaderType,
  UserType,
  RegisterType,
  TData,
  TCategoria,
  TService,
};
