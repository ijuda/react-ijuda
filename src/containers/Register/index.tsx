import { useState } from "react";
import * as C from "./styles"


const Register = () => {

  const [isClient, setIsClient] = useState(false)
  const [isEmployee, setIsEmployee] = useState(false)

  const isUserOrClient = () => {
    if(isClient){
      setIsClient(false)
      setIsEmployee(true)
    }else{
      setIsClient(true)
      setIsEmployee(false)
    }
  }

  return (
    <C.Container>
      <C.RegisterContainer>
        <C.RegisterNav>
          <C.TypeUser onClick={isUserOrClient}>Cliente</C.TypeUser>
          <C.TypeUser onClick={isUserOrClient}>Colaborador</C.TypeUser>
        </C.RegisterNav>
      </C.RegisterContainer>
    </C.Container>
  )
};

export default Register;
