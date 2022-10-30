import React from 'react';
import * as C from './styles';

type Props = {
  children?: any;
  type: string;
  placeholder: string;
  name: string;
  id: string;
};

const Input = ({ placeholder, type, name, id, children }: Props) => {
  return (
    <C.Input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
    >
      {children}
    </C.Input>
  );
};

export default Input;
