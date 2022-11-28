import { toast } from 'react-toastify';

type props = {
  message: string;
  type: 'success' | 'error' | 'alert';
};

export const showToastMessage = ({ message, type }: props) => {
  switch (type) {
    case 'success':
      return toast.success(`${message}`, {
        position: toast.POSITION.BOTTOM_LEFT,
        style: {
          fontSize: 20,
        },
      });
    case 'error':
      return toast.error(`${message}`, {
        position: toast.POSITION.BOTTOM_LEFT,
        style: {
          fontSize: 20,
        },
      });
    case 'alert':
      return toast.info(`${message}`, {
        position: toast.POSITION.BOTTOM_LEFT,
        style: {
          fontSize: 20,
        },
      });
  }
};
