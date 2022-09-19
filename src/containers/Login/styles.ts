import styled from "styled-components";

export const LoginContainer = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormContainer = styled.div`
  display: flex;
  height: 48rem;
`;

export const LogoBox = styled.div`
  background-color: ${({ theme }) => theme.colors.primary_dark};
  flex-grow: 0;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10rem;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
`;

export const FormBox = styled.div`
  background-color: #1a1919;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50rem;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
`;

export const Title = styled.span`
  font-size: 3rem;
  font-weight: 100;
  display: block;
  text-align: center;
  margin-top: 5rem;
`;

export const SocialLogin = styled.span`
  margin-top: 2.5rem;
  display: flex;
  gap: 4rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 3.6rem;
`;

export const RegisterLink = styled.p`
  font-size: 1.5rem;
  margin-top: 2.5rem;

  a {
    color: #81d8f7;
    font-weight: bold;
  }
`;
