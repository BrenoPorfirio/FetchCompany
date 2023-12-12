import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const BackButton = styled(Link)`
  background-color: #0385FD;
  border: 1px solid #0385FD;
  color: #fff;
  color: #000;
  padding: 10px;
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #fff; 
  }
`;

const Container = styled.div`
  position: absolute;
  top: 15px ;
  right: 5px;
`;

function Voltar() {
  return (
    <Container>
      <BackButton to="/">
        <strong>Voltar</strong>
      </BackButton>
    </Container>
  );
}

export default Voltar;
