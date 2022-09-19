import Button from "@components/ui/Atom/Button";
import Input from "@components/ui/Atom/Input";
import Logo from "@components/ui/Atom/Logo";
import Facebook from "@assets/Social/Facebook";
import Google from "@assets/Social/Google";
import Linkedin from "@assets/Social/Linkedin";
import * as C from "./styles";

const Login = () => {
  return (
    <C.LoginContainer>
      <C.FormContainer>
        <C.LogoBox>
          <Logo color="#FFF" />
        </C.LogoBox>
        <C.FormBox>
          <C.Title>Conecte-se</C.Title>
          <C.SocialLogin>
            <Google />
            <Linkedin />
            <Facebook />
          </C.SocialLogin>
          <C.Form>
            <Input
              name="email"
              type="email"
              id="email"
              placeholder="Insira seu email"
            />
            <Input
              name="password"
              type="password"
              id="password"
              placeholder="Insira sua senha"
            />
            <Button content="Entrar" type="secondary" />
          </C.Form>
          <C.RegisterLink>
            Não possui conta? <a href="#">Cadastre-se</a>.
          </C.RegisterLink>
        </C.FormBox>
      </C.FormContainer>
    </C.LoginContainer>
  );
};

export default Login;
