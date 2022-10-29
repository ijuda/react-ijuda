import RegisterCard from "@components/ui/Molecule/Card/RegisterCard";
import { Grid } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import * as C from "./styles";

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <C.Container>
      <Grid container direction={"row"} spacing={7} justifyContent="center">
        <Grid item onClick={() => navigate("/register/client")}>
          <RegisterCard
            cardTitle="Cliente"
            cardContent="Está precisando de ajuda? Saiba que você está no lugar certo! Crie
                sua conta e usufrua dos serviços dos nossos colaboradores!"
            image={"./src/assets/CardImages/Client.jpg"}
            alt={"testando"}
          />
        </Grid>
        <Grid item onClick={() => navigate("/register/employee")}>
          <RegisterCard
            cardTitle="Trabalhe conosco"
            cardContent="Seja um colaborador e impulsione o seu trabalho, onde milhares
                    de pessoas consigam lhe encontrar facilmente!"
            alt="testando"
            image={"./src/assets/CardImages/Employee.jpg"}
          />
        </Grid>
      </Grid>
    </C.Container>
  );
};

export default Register;
