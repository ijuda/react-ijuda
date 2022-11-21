import { api } from '@api/api';

export const getAllServices = () => {
  const accessToken = localStorage.getItem('accessToken');
  if (accessToken) {
    return api.get('/prestadorservico/prestadoresServico');
  } else {
    console.log('Error');
  }
};
