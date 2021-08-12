import React, { useState } from "react";
import { Logo, WrapperLogin, AnimPlace, LottieLogin, ContainerLogin, SubTitle, Title, ContainerForm, SpanError, ContainerButtons, HaveAccount } from "./style";
import * as animationLogin from '../../assets/lotties/63787-secure-login.json';
import axios from "axios";

import { Container } from "../../App";
import Button from "../../components/Button";

import logo from '../../assets/dailyWhite1920Export.gif';

export default function LoginPage(props){

  let capturado = {};
  const handleChangeUser = (e) => {
    capturado.username = e.target.value;
  }
  const handleChangePass = (e) => {
    capturado.password = e.target.value;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://dailybills.azurewebsites.net/v1/users/login",
      {
        username: capturado.username,
        password: capturado.password
      }
    ).then(res => {
      localStorage.setItem("token", res.data.token);
      props.history.push("/dashboard");
    })
    .catch(() => {
      const spanError = document.querySelector("#msg-erro");
      spanError.innerText = 'Opa. Seu usuário (e-mail) ou senha estão errados.'
    });
}

  return(
    <Container>
        <Logo src={logo} alt="logo" />
        <WrapperLogin>
          <AnimPlace>
            <LottieLogin
            loop={false}
            animationData={animationLogin}
            play
            style={{ width: '100%', height: 'auto' }}
             />
          </AnimPlace>
          <ContainerLogin>
            <SubTitle>Login</SubTitle>
            <Title>Sua conta</Title>
            <ContainerForm onSubmit={handleSubmit}>
                <label htmlFor="user">Usuário</label>
                <input onChange={handleChangeUser} type="text" name="user" id="user" autoFocus/>
                <label htmlFor="password">Senha</label>
                <input onChange={handleChangePass} type="password" name="password" id="password" />
                <SpanError id="msg-erro"></SpanError>
              <ContainerButtons>
                <Button type="submit">
                  Login
                </Button>
                <a href="#">Esqueceu sua senha?</a>
              </ContainerButtons>
              <HaveAccount>Não tem uma conta? Contate o seu administrador.</HaveAccount>
            </ContainerForm>
          </ContainerLogin>
        </WrapperLogin>
    </Container>
  )
}