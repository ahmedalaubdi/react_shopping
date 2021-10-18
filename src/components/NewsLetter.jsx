import { Send } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60vh;
  background: #fefedd;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 68px;
  margin-bottom: 20px;
`;
const Desc = styled.div`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" })}
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background: #f3f3f3;
  display: flex;
  justify-content: space-between;
  border: 1px solid gray;
  ${mobile({ width: "89%" })}
`;
const Input = styled.input`
  border: none;
  outline: none;
  flex: 8;
  text-align: center;
  padding: 0 20px;
`;
const Button = styled.button`
  flex: 1;
  cursor: pointer;
  border: none;
  outline: none;
  background: crimson;
  color: #ffffff;
`;
export const NewsLetter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <InputContainer>
        <Input placeholder="..your email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};
