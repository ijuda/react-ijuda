import { api } from '@api/api';

export const getAllCategories = () => {
  const accessToken = localStorage.getItem('accessToken');

  return api.get('/categoria/categorias');

  console.log('Error');
};
