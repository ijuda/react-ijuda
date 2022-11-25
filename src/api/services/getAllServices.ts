import { api } from '@api/api';

export const getAllServices = () => {
  const accessToken = localStorage.getItem('accessToken');

  return api.get('/servico/servicos');

  console.log('Error');
};
