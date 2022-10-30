import React from 'react';
import * as C from './styles';

type Props = {
  children: string;
};

const PrimaryButton = ({ children }: Props) => {
  return <C.Button>{children}</C.Button>;
};

export default PrimaryButton;
