import React from "react";
import { puplarProducts } from "../data";
import styled from "styled-components";
import Product from "./Product";

const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  overflow: hidden;
  background: #f5fafd;
`;
const Products = () => {
  return (
    <Container>
      {puplarProducts.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </Container>
  );
};

export default Products;
