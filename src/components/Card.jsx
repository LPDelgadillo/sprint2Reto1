import React, { Component } from 'react'
import styled from "styled-components";

const DivPrincipal = styled.div`
  background-color: white;
  height:150px;
  border: none;
  width: 80%;
  margin: 30px auto;
  border-radius:5px;
  border-left: 5px solid #5DA5A5;
  display: flex;
  align-items: center;
  gap: 30px;
`;

const PCeleste = styled.p`
  color: #69BFB7;
  font-weight: 600;
`;


export default class Card extends Component {
  render() {
    const {id, empresa, imagen, publicacion, ubicacion, cargo, modalidad}=this.props.ofertaProps
    // console.log(empresa)
    return (
      <DivPrincipal>
        <div key={id}></div>
        
        <div><img width="100px" src={imagen} alt="" /></div>
        <div>
          <div>
          <PCeleste>{empresa}</PCeleste>
          </div>
          <h2>{cargo}</h2>
          <p>{publicacion} <span>•</span> {modalidad} <span>•</span> {ubicacion}</p>
        </div>
      </DivPrincipal>
    )
  }
}
