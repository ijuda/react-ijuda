export interface IData {
  id?: number | any;
  telefone: string;
  cpf: string;
  endereco: {
    rua: string;
    bairro: string;
    numero: number;
    complemento: string;
    cidade: string;
    pais: string;
    cep: string;
  };
  ativo: true;
  usuario: {
    id: number;
    nome: string;
    email: string;
    senha: string;
    permissoes: [
      {
        id: number;
        descricao: string;
      }
    ];
    imagem: null;
  };
  servicos: [
    {
      id: number;
      nome: string;
      valor: number;
      categoria: {
        id: number;
        nome: string;
      };
    }
  ];
}
