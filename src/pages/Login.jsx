import React from "react";
import styled from "styled-components";
import Pic from "../img/long.png";
import { mobile } from "../responsive";

const Container = styled.div`
  //   width: 100vw;
  //   height: 100vh;
  //   background: #fefdcb;
  //   display: flex;
  //   align-items: center;
  //   justify-content: center;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(${Pic});
  //   background-size: cover;
  background-repeat: no-repeat;
  object-fit: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 30%;
  padding: 20px;
  background: #f3f3f3;
  ${mobile({ width: "80%" })}
`;

const Title = styled.h1`
  font-size: 27px;
  font-weight: 500;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 9px;
  outline: none;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 14px 19px;
  background: teal;
  color: #f3f3f3;
  cursor: pointer;
  margin: 18px 0px;
`;

const Link = styled.a`
  margin: 6px 0px;
  font-size: 12px;
  cursor: pointer;
`;
const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />

          <Button>LOG IN</Button>
          <Link>Don't You Remember Your Password?</Link>
          <Link>Create A New Account?</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
