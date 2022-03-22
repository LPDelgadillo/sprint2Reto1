import React, { Component } from "react";
import styled from "styled-components";
import Listar from "../components/Listar";
import Nav from "../components/Nav";

const DivReset = styled.div`
  margin: 0;
  padding: 0;
  background-color: #f0fafb;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding-bottom: 100px;
  font-family: spartan;
`;

export default class Contenedor extends Component {
  render() {
    return (
      <DivReset>
        <Nav />
        <Listar />
      </DivReset>
    );
  }
}
