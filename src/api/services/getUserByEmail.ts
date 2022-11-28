import { api } from '@api/api';

export const getUserByEmail = async (email: string) => {
  return await api.get(`/usuario/email?email=${email}`).then((response) => {
    return response.data;
  });
};
