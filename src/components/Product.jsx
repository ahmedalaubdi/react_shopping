import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Info = styled.div`
  background: rgba(0, 0, 0, 0.2);
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
  transition: all 0.5s ease;
`;
const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f3f3f3;
  position: relative;
  &:hover ${Info} {
    opacity: 1;
  }
  cursor: pointer;
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  background: white;
  border-radius: 50%;
  position: absolute;
`;

const Image = styled.img`
  height: 75%;
  width: 65%;
  object-fit: cover;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 50%;
  margin-right: 15px;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    background: #f3f3f3;
    transform: scale(1.1);
  }
`;
const Product = ({ product }) => {
  return (
    <Container>
      <Circle />
      <Image src={product.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
