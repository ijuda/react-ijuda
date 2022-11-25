import { api } from '@api/api';

export const getAllCategories = () => {
  return api.get('/categoria/categorias');
};
