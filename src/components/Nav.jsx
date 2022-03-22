import React, { Component } from 'react'
import styled from "styled-components";

const DivReset = styled.div`
  margin: 0;
  padding: 0;
  background-color: #5DA5A5;
`;

export default class Nav extends Component {
  render() {
    return (
        <DivReset>
            <img 
              alt ="" 
              width="100%" 
              src ="https://res.cloudinary.com/dsocuaabs/image/upload/v1647785860/InicioReact/bg-header-desktop_qcgv0w.svg"
            />
        </DivReset>
    )
  }
}
