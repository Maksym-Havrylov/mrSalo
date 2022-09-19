import React from "react";
import styled from "styled-components";
import logoImg from "../../img/logo.svg";
import signImg from "../../img/sign.svg";

const NavBarStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #299b01;
  color: white;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const H1 = styled.h1`
  font-size: 24px;
  margin-left: 16px;
`;

const ImgLogo = styled.img`
  width: 50px;
`;

const SignIn = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: inherit;
  border: none;
  font-size: 16px;
  color: white;
`;

const SignInImg = styled.img`
  margin-bottom: 4px;
`;

export const NavBar = () => (
  <NavBarStyled>
    <Logo>
      <ImgLogo src={logoImg} alt="logo"/>
      <H1>Mr. Salo</H1>
    </Logo>
    <SignIn>
      <SignInImg src={signImg} alt="sign in"/>
      Sign in</SignIn>
  </NavBarStyled>
);