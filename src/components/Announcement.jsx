import styled from "styled-components";
import React from "react";

const Container = styled.div`
  height: 30px;
  background: teal;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 600;
`;

const Announcement = () => {
  return (
    <Container>
      <h4>Good deal, Free Shipping on orders over $100</h4>
    </Container>
  );
};

export default Announcement;
