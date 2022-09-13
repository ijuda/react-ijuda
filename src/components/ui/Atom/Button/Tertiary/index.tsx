import React from "react";
import * as C from "./styles";

type Props = {
  children: string;
};

const TertiaryButton = ({ children }: Props) => {
  return <C.Button>{children}</C.Button>;
};

export default TertiaryButton;
