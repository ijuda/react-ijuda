import { api } from '@api/api';

export const getAllPrestadorServico = () => {
  return api.get('/prestadorservico/prestadoresServico');
};
