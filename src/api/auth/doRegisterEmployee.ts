import { api } from '@api/api';

export const doRegisterEmployee = async (payload: any) => {
  await api
    .post('/prestadorservico', payload)
    .then((response) => console.log(response.data))
    .catch((err) => console.log(err));
};
