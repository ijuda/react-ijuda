import * as C from "./styles";

type Props = {
  children: string;
};

const Button = ({ children }: Props) => {
  return <C.Button>{children}</C.Button>;
};

export default Button;
