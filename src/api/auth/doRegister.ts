import { api } from '@api/api';

export const doRegister = async (payload: any) => {
  await api
    .post('/cliente', payload)
    .then((response) => console.log(response.data))
    .catch((err) => console.log(err));
};
