import { api } from '@api/api';

export const getAllServices = () => {
  return api.get('/servico/servicos');
};
