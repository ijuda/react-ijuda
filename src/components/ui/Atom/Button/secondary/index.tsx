import React from 'react';
import * as C from './styles';

type Props = {
  children: string;
};

const SecondaryButton = ({ children }: Props) => {
  return <C.Button>{children}</C.Button>;
};

export default SecondaryButton;
